import * as d3 from 'd3'
import React from 'react'

import { convertTime } from '@utils/helpers'

interface UseChartProps {
  activeCoin: CoinInfo | null
  chart: Array<Histohour> | null
  ref: React.MutableRefObject<null>
}

type CountsByDateType = Array<{ date: Date; count: number }>

export const useChart = ({ chart, ref, activeCoin }: UseChartProps) => {
  React.useEffect(() => {
    if (chart && chart.length) {
      if (ref.current) {
        const e = ref.current as HTMLElement

        if (e) {
          let child = e.lastElementChild
          while (child) {
            e.removeChild(child)
            child = e.lastElementChild
          }
        }
      }

      const CountsByDate: CountsByDateType = chart.map((el) => ({
        date: new Date(convertTime(el.time)),
        count: el.volume
      }))

      const margin = { top: 20, right: 20, bottom: 50, left: 115 }
      const width = parseInt(d3.select('#d3').style('width'), 10) - margin.left - margin.right
      const height = parseInt(d3.select('#d3').style('height'), 10) - margin.top - margin.bottom

      // Set up chart
      const svg = d3
        .select(ref.current)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

      if (CountsByDate && CountsByDate.length) {
        // x axis scale
        const x = d3
          .scaleTime()
          // @ts-ignore
          .domain(d3.extent(CountsByDate, (d) => d.date))
          .range([0, width])

        svg
          .append('g')
          .attr('transform', 'translate(0,' + height + ')')
          .call(d3.axisBottom(x))

        // Get the max value of counts
        const max = d3.max(CountsByDate, (d) => d.count)

        // y axis scale
        // @ts-ignore
        const y = d3.scaleLinear().domain([0, max]).range([height, 0])

        svg.append('g').call(d3.axisLeft(y))

        // Draw line
        svg
          .append('path')
          .datum(CountsByDate)
          .attr('fill', 'none')
          .attr('stroke', 'lightgrey')
          .attr('stroke-width', 2)
          .attr(
            'd',
            // @ts-ignore
            d3
              .line()
              // @ts-ignore
              .x((d) => x(d.date))
              // @ts-ignore
              .y((d) => y(d.count))
          )
      }
    }
  }, [activeCoin, chart])

  const titles: Record<RequestsIntervalType, string> = React.useMemo(
    () => ({
      day: 'One day',
      month: 'One month',
      threeDays: '3 Days',
      week: 'One week'
    }),
    []
  )

  return { titles }
}
