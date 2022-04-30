import { de } from "date-fns/locale";
import { createChart, LineStyle, PriceScaleMode } from "lightweight-charts";
import React from 'react';

const Graph = () => {
    const chartRef = React.useRef(null);

    React.useEffect(() => {
        if (chartRef.current) {
            const chart = createChart(chartRef.current, {
                width: 720,
                height: 310,
                // priceScale: {
                //     scaleMargins: {
                //         top: 0.3,
                //         bottom: 0.25
                //     },
                //     borderVisible: false
                // },
                timeScale: {
                    borderColor: "#fff"
                },
                layout: {
                    backgroundColor: '#fff0',
                },
                grid: {
                    vertLines: {
                        color: "#fff0",
                        style: LineStyle.Dotted
                    },
                    horzLines: {
                        color: "#fff0",
                        style: LineStyle.Dotted
                    }
                }
            });

            prepareChart(chart);
        }
    }, [])

    function prepareChart(chart) {

        var candleSeries = chart.addAreaSeries({
            topColor: "rgba(254, 183, 77, 0.7)",
            bottomColor: "rgba(254, 183, 77, 0.13)",
            lineColor: "#feb74d"
        });

        var data = [
            { time: "2018-10-19", value: 219.31 },
            { time: "2018-10-22", value: 220.65 },
            { time: "2018-10-23", value: 222.73 },
            { time: "2018-10-24", value: 215.09 },
            { time: "2018-10-25", value: 219.8 },
            { time: "2018-10-26", value: 216.3 },
            { time: "2018-10-29", value: 212.24 },
            { time: "2018-10-30", value: 213.3 },
            { time: "2018-10-31", value: 218.86 },
            { time: "2018-11-01", value: 222.22 },
            { time: "2018-11-02", value: 207.48 },
            { time: "2018-11-05", value: 201.59 },
            { time: "2018-11-06", value: 203.77 },
            { time: "2018-11-07", value: 209.95 },
            { time: "2018-11-08", value: 208.49 },
            { time: "2018-11-09", value: 204.47 },
            { time: "2018-11-12", value: 194.17 },
            { time: "2018-11-13", value: 192.23 },
            { time: "2018-11-14", value: 186.8 },
            { time: "2018-11-15", value: 191.41 },
            { time: "2018-11-16", value: 193.53 },
            { time: "2018-11-19", value: 185.86 },
            { time: "2018-11-20", value: 176.98 },
            { time: "2018-11-21", value: 176.78 },
            { time: "2018-11-23", value: 172.29 },
            { time: "2018-11-26", value: 174.62 },
            { time: "2018-11-27", value: 174.24 },
            { time: "2018-11-28", value: 180.94 },
            { time: "2018-11-29", value: 179.55 },
            { time: "2018-11-30", value: 178.58 },
            { time: "2018-12-03", value: 184.82 },
            { time: "2018-12-04", value: 176.69 },
            { time: "2018-12-06", value: 174.72 },
            { time: "2018-12-07", value: 168.49 },
            { time: "2018-12-10", value: 169.6 },
            { time: "2018-12-11", value: 168.63 },
            { time: "2018-12-12", value: 169.1 },
            { time: "2018-12-13", value: 170.95 },
            { time: "2018-12-14", value: 165.48 },
            { time: "2018-12-17", value: 163.94 },
            { time: "2018-12-18", value: 166.07 },
            { time: "2018-12-19", value: 160.89 },
            { time: "2018-12-20", value: 156.83 },
            { time: "2018-12-21", value: 150.73 },
            { time: "2018-12-24", value: 146.83 },
            { time: "2018-12-26", value: 157.17 },
            { time: "2018-12-27", value: 156.15 },
            { time: "2018-12-28", value: 156.23 },
            { time: "2018-12-31", value: 157.74 },
            { time: "2019-01-02", value: 157.92 },
            { time: "2019-01-03", value: 142.19 },
            { time: "2019-01-04", value: 148.26 },
            { time: "2019-01-07", value: 147.93 },
            { time: "2019-01-08", value: 150.75 },
            { time: "2019-01-09", value: 153.31 },
            { time: "2019-01-10", value: 153.8 },
            { time: "2019-01-11", value: 152.29 },
            { time: "2019-01-14", value: 150 },
            { time: "2019-01-15", value: 153.07 },
            { time: "2019-01-16", value: 154.94 },
            { time: "2019-01-17", value: 155.86 },
            { time: "2019-01-18", value: 156.82 },
            { time: "2019-01-22", value: 153.3 },
            { time: "2019-01-23", value: 153.92 },
            { time: "2019-01-24", value: 152.7 },
            { time: "2019-01-25", value: 157.76 },
            { time: "2019-01-28", value: 156.3 },
            { time: "2019-01-29", value: 154.68 },
            { time: "2019-01-30", value: 165.25 },
            { time: "2019-01-31", value: 166.44 },
            { time: "2019-02-01", value: 166.52 },
            { time: "2019-02-04", value: 171.25 },
            { time: "2019-02-05", value: 174.18 },
            { time: "2019-02-06", value: 174.24 },
            { time: "2019-02-07", value: 170.94 },
            { time: "2019-02-08", value: 170.41 },
            { time: "2019-02-11", value: 169.43 },
            { time: "2019-02-12", value: 170.89 },
            { time: "2019-02-13", value: 170.18 },
            { time: "2019-02-14", value: 170.8 },
            { time: "2019-02-15", value: 170.42 },
            { time: "2019-02-19", value: 170.93 },
            { time: "2019-02-20", value: 172.03 },
            { time: "2019-02-21", value: 171.06 },
            { time: "2019-02-22", value: 172.97 },
            { time: "2019-02-25", value: 174.23 },
            { time: "2019-02-26", value: 174.33 },
            { time: "2019-02-27", value: 174.87 },
            { time: "2019-02-28", value: 173.15 },
            { time: "2019-03-01", value: 174.97 },
            { time: "2019-03-04", value: 175.85 },
            { time: "2019-03-05", value: 175.53 },
            { time: "2019-03-06", value: 174.52 },
            { time: "2019-03-07", value: 172.5 },
            { time: "2019-03-08", value: 172.91 },
            { time: "2019-03-11", value: 178.9 },
            { time: "2019-03-12", value: 180.91 },
            { time: "2019-03-13", value: 181.71 },
            { time: "2019-03-14", value: 183.73 },
            { time: "2019-03-15", value: 186.12 },
            { time: "2019-03-18", value: 188.02 },
            { time: "2019-03-19", value: 186.53 },
            { time: "2019-03-20", value: 188.16 },
            { time: "2019-03-21", value: 195.09 },
            { time: "2019-03-22", value: 191.05 },
            { time: "2019-03-25", value: 188.74 },
            { time: "2019-03-26", value: 186.79 },
            { time: "2019-03-27", value: 188.47 },
            { time: "2019-03-28", value: 188.72 },
            { time: "2019-03-29", value: 189.95 },
            { time: "2019-04-01", value: 191.24 },
            { time: "2019-04-02", value: 194.02 },
            { time: "2019-04-03", value: 195.35 },
            { time: "2019-04-04", value: 195.69 },
            { time: "2019-04-05", value: 197 },
            { time: "2019-04-08", value: 200.1 },
            { time: "2019-04-09", value: 199.5 },
            { time: "2019-04-10", value: 200.62 },
            { time: "2019-04-11", value: 198.95 },
            { time: "2019-04-12", value: 198.87 },
            { time: "2019-04-15", value: 199.23 },
            { time: "2019-04-16", value: 199.25 },
            { time: "2019-04-17", value: 203.13 },
            { time: "2019-04-18", value: 203.86 },
            // { time: "2018-10-19", value: 54.9 },
            // { time: "2018-10-22", value: 54.98 },
            // { time: "2018-10-23", value: 57.21 },
            // { time: "2018-10-24", value: 57.42 },
            // { time: "2018-10-25", value: 56.43 },
            // { time: "2018-10-26", value: 55.51 },
            // { time: "2018-10-29", value: 56.48 },
            // { time: "2018-10-30", value: 58.18 },
            // { time: "2018-10-31", value: 57.09 },
            // { time: "2018-11-01", value: 56.05 },
            // { time: "2018-11-02", value: 56.63 },
            // { time: "2018-11-05", value: 57.21 },
            // { time: "2018-11-06", value: 57.21 },
            // { time: "2018-11-07", value: 57.65 },
            // { time: "2018-11-08", value: 58.27 },
            // { time: "2018-11-09", value: 58.46 },
            // { time: "2018-11-12", value: 58.72 },
            // { time: "2018-11-13", value: 58.66 },
            // { time: "2018-11-14", value: 58.94 },
            // { time: "2018-11-15", value: 59.08 },
            // { time: "2018-11-16", value: 60.21 },
            // { time: "2018-11-19", value: 60.62 },
            // { time: "2018-11-20", value: 59.46 },
            // { time: "2018-11-21", value: 59.16 },
            // { time: "2018-11-23", value: 58.64 },
            // { time: "2018-11-26", value: 59.17 },
            // { time: "2018-11-27", value: 60.65 },
            // { time: "2018-11-28", value: 60.06 },
            // { time: "2018-11-29", value: 59.45 },
            // { time: "2018-11-30", value: 60.3 },
            // { time: "2018-12-03", value: 58.16 },
            // { time: "2018-12-04", value: 58.09 },
            // { time: "2018-12-06", value: 58.08 },
            // { time: "2018-12-07", value: 57.68 },
            // { time: "2018-12-10", value: 58.27 },
            // { time: "2018-12-11", value: 58.85 },
            // { time: "2018-12-12", value: 57.25 },
            // { time: "2018-12-13", value: 57.09 },
            // { time: "2018-12-14", value: 57.08 },
            // { time: "2018-12-17", value: 55.95 },
            // { time: "2018-12-18", value: 55.65 },
            // { time: "2018-12-19", value: 55.86 },
            // { time: "2018-12-20", value: 55.07 },
            // { time: "2018-12-21", value: 54.92 },
            // { time: "2018-12-24", value: 53.05 },
            // { time: "2018-12-26", value: 54.44 },
            // { time: "2018-12-27", value: 55.15 },
            // { time: "2018-12-28", value: 55.27 },
            // { time: "2018-12-31", value: 56.22 },
            // { time: "2019-01-02", value: 56.02 },
            // { time: "2019-01-03", value: 56.22 },
            // { time: "2019-01-04", value: 56.36 },
            // { time: "2019-01-07", value: 56.72 },
            // { time: "2019-01-08", value: 58.38 },
            // { time: "2019-01-09", value: 57.05 },
            // { time: "2019-01-10", value: 57.6 },
            // { time: "2019-01-11", value: 58.02 },
            // { time: "2019-01-14", value: 58.03 },
            // { time: "2019-01-15", value: 58.1 },
            // { time: "2019-01-16", value: 57.08 },
            // { time: "2019-01-17", value: 56.83 },
            // { time: "2019-01-18", value: 57.09 },
            // { time: "2019-01-22", value: 56.99 },
            // { time: "2019-01-23", value: 57.76 },
            // { time: "2019-01-24", value: 57.07 },
            // { time: "2019-01-25", value: 56.4 },
            // { time: "2019-01-28", value: 55.07 },
            // { time: "2019-01-29", value: 53.28 },
            // { time: "2019-01-30", value: 54.0 },
            // { time: "2019-01-31", value: 55.06 },
            // { time: "2019-02-01", value: 54.55 },
            // { time: "2019-02-04", value: 54.04 },
            // { time: "2019-02-05", value: 54.14 },
            // { time: "2019-02-06", value: 53.79 },
            // { time: "2019-02-07", value: 53.57 },
            // { time: "2019-02-08", value: 53.95 },
            // { time: "2019-02-11", value: 54.05 },
            // { time: "2019-02-12", value: 54.42 },
            // { time: "2019-02-13", value: 54.48 },
            // { time: "2019-02-14", value: 54.03 },
            // { time: "2019-02-15", value: 55.16 },
            // { time: "2019-02-19", value: 55.44 },
            // { time: "2019-02-20", value: 55.76 },
            // { time: "2019-02-21", value: 56.15 },
            // { time: "2019-02-22", value: 56.92 },
            // { time: "2019-02-25", value: 56.78 },
            // { time: "2019-02-26", value: 56.64 },
            // { time: "2019-02-27", value: 56.72 },
            // { time: "2019-02-28", value: 56.92 },
            // { time: "2019-03-01", value: 56.96 },
            // { time: "2019-03-04", value: 56.24 },
            // { time: "2019-03-05", value: 56.08 },
            // { time: "2019-03-06", value: 55.68 },
            // { time: "2019-03-07", value: 56.3 },
            // { time: "2019-03-08", value: 56.53 },
            // { time: "2019-03-11", value: 57.58 },
            // { time: "2019-03-12", value: 57.43 },
            // { time: "2019-03-13", value: 57.66 },
            // { time: "2019-03-14", value: 57.95 },
            // { time: "2019-03-15", value: 58.39 },
            // { time: "2019-03-18", value: 58.07 },
            // { time: "2019-03-19", value: 57.5 },
            // { time: "2019-03-20", value: 57.67 },
            // { time: "2019-03-21", value: 58.29 },
            // { time: "2019-03-22", value: 59.76 },
            // { time: "2019-03-25", value: 60.08 },
            // { time: "2019-03-26", value: 60.63 },
            // { time: "2019-03-27", value: 60.88 },
            // { time: "2019-03-28", value: 59.08 },
            // { time: "2019-03-29", value: 59.13 },
            // { time: "2019-04-01", value: 59.09 },
            // { time: "2019-04-02", value: 58.53 },
            // { time: "2019-04-03", value: 58.87 },
            // { time: "2019-04-04", value: 58.99 },
            // { time: "2019-04-05", value: 59.09 },
            // { time: "2019-04-08", value: 59.13 },
            // { time: "2019-04-09", value: 58.4 },
            // { time: "2019-04-10", value: 58.61 },
            // { time: "2019-04-11", value: 58.56 },
            // { time: "2019-04-12", value: 58.74 },
            // { time: "2019-04-15", value: 58.71 },
            // { time: "2019-04-16", value: 58.79 },
            // { time: "2019-04-17", value: 57.78 },
            // { time: "2019-04-18", value: 58.04 },
            // { time: "2019-04-22", value: 58.37 },
            // { time: "2019-04-23", value: 57.15 },
            // { time: "2019-04-24", value: 57.08 },
            // { time: "2019-04-25", value: 55.85 },
            // { time: "2019-04-26", value: 56.58 },
        ];

        candleSeries.setData(data);

        var lastClose = data[data.length - 1].close;
        var lastIndex = data.length - 1;

        var targetIndex = lastIndex + 105 + Math.round(Math.random() + 30);
        var targetPrice = getRandomPrice();

        var currentIndex = lastIndex + 1;
        var currentBusinessDay = { day: 29, month: 5, year: 2019 };
        var ticksInCurrentBar = 0;
        var currentBar = {
            open: null,
            high: null,
            low: null,
            close: null,
            time: currentBusinessDay
        };

        function mergeTickToBar(price) {
            if (currentBar.open === null) {
                currentBar.open = price;
                currentBar.high = price;
                currentBar.low = price;
                currentBar.close = price;
            } else {
                currentBar.close = price;
                currentBar.high = Math.max(currentBar.high, price);
                currentBar.low = Math.min(currentBar.low, price);
            }
            candleSeries.update(currentBar);
        }

        function reset() {
            candleSeries.setData(data);
            lastClose = data[data.length - 1].close;
            lastIndex = data.length - 1;

            targetIndex = lastIndex + 5 + Math.round(Math.random() + 30);
            targetPrice = getRandomPrice();

            currentIndex = lastIndex + 1;
            currentBusinessDay = { day: 29, month: 5, year: 2019 };
            ticksInCurrentBar = 0;
        }

        function getRandomPrice() {
            return 10 + Math.round(Math.random() * 10000) / 100;
        }

        function nextBusinessDay(time) {
            var d = new Date();
            d.setUTCFullYear(time.year);
            d.setUTCMonth(time.month - 1);
            d.setUTCDate(time.day + 1);
            d.setUTCHours(0, 0, 0, 0);
            return {
                year: d.getUTCFullYear(),
                month: d.getUTCMonth() + 1,
                day: d.getUTCDate()
            };
        }

        setInterval(function () {
            var deltaY = targetPrice - lastClose;
            var deltaX = targetIndex - lastIndex;
            var angle = deltaY / deltaX;
            var basePrice = lastClose + (currentIndex - lastIndex) * angle;
            var noise = 0.1 - Math.random() * 0.2 + 1.0;
            var noisedPrice = basePrice * noise;
            mergeTickToBar(noisedPrice);
            if (++ticksInCurrentBar === 5) {
                // move to next bar
                currentIndex++;
                currentBusinessDay = nextBusinessDay(currentBusinessDay);
                currentBar = {
                    open: null,
                    high: null,
                    low: null,
                    close: null,
                    time: currentBusinessDay
                };
                ticksInCurrentBar = 0;
                if (currentIndex === 5000) {
                    reset();
                    return;
                }
                if (currentIndex === targetIndex) {
                    // change trend
                    lastClose = noisedPrice;
                    lastIndex = currentIndex;
                    targetIndex = lastIndex + 5 + Math.round(Math.random() + 30);
                    targetPrice = getRandomPrice();
                }
            }
        }, 200);

    }
    return <div ref={chartRef} />;
}

export default Graph;