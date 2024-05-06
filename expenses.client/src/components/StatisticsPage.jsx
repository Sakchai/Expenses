import { useRef } from 'react';
import { ArcElement } from 'chart.js';
import { Doughnut, getElementAtEvent } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { getExpensesPerCategory } from '../services/statistics';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

Chart.register(ArcElement);

const StatisticsPage = () => {
    const chartRef = useRef();
    const dispatch = useDispatch();

    const expenseAmountPerCategory = useSelector(state =>
        state.statisticsSlice.expenseAmountPerCategory);
    const [doughnut, setDoughnut] = useState({
        labels: [],
        data: [],
    });

    useEffect(() => {
        getExpensesPerCategory(dispatch);
    }, []);

    useEffect(() => {
        setDoughnut({
            labels: expenseAmountPerCategory.map(x => x.Key),
            data: expenseAmountPerCategory.map(x => x.Value),
        });
    }, [expenseAmountPerCategory]);

    const data = {
        labels: doughnut.labels,
        datasets: [{
            data: doughnut.data,
            backgroundColor: [
                '#007bff', // blue
                '#FF0000', // red
                '#FFD700', // yellow
                '#28a745', // green
                '#FF00FF', // violet
                '#ff9900', // orange
                '#00FFFF', // aqua marine
                '#d69ae5', // red violet
                '#FF8F66', // orange red
                '#00FF00', // lime
            ],
        }],
    };

    return <div hidden={!expenseAmountPerCategory || !expenseAmountPerCategory.length}
        style={{ maxWidth: '35rem', maxHeight: '35rem', margin: 'auto', textAlign: 'center' }}>
        <h4 style={{ marginTop: '10px' }}>Expenses per Category</h4>
        <Doughnut data={data}  />
    </div>
}

export default StatisticsPage;