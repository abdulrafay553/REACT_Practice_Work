import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { PieChart } from '@mui/x-charts/PieChart';

export default function Charts() {

    const data = [
        { id: 0, value: 10, label: 'Lahore' },
        { id: 1, value: 15, label: 'Karachi' },
        { id: 2, value: 20, label: 'Islamabad' },
    ];
    return (
        <div>
            <h1 style={{ "font-family": "Brush Script MT", }} >CHARTS</h1>
            <hr />
            <h2>BAR CHART</h2>
            <div className='d-flex justify-center'>
                <BarChart
                    xAxis={[{ scaleType: 'band', data: ['Lahore', 'Karachi', 'Islamabad'] }]}
                    series={[{ data: [4, 2, 3] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                    width={500}
                    height={300}
                />
            </div>
            <hr />
            <h2>PIE CHART</h2>
            <PieChart
                series={[
                    {
                        data,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    },
                ]}
                height={200}
            />
        </div>
    )
}
