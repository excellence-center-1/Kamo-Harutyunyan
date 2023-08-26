import { BarChart } from '@mui/x-charts/BarChart';
import * as React from 'react';

export const BarDiagram = () => {
   return (
      <div>
         <BarChart
            xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] }]}
            series={[{ data: [4, 3, 5, 4, 2, 1, 10, 5, 7, 8, 12, 11] }]}
            width={500}
            height={300}
         />
      </div>
   );
}
