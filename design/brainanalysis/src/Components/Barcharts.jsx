import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Openness', score: 8 },
  { name: 'Conscientiousness', score: 7 },
  { name: 'Extraversion', score: 5 },
  { name: 'Agreeableness', score: 6 },
  { name: 'Neuroticism', score: 4 },
];

// Define colors for each bar
const COLORS = ['#3b82f6', '#22c55e', '#ef4444', '#78716c', '#9333ea'];

const Barchart = () => {
  return (
    <div className="opacity-80">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name"
            tick={{ fontSize: 12, fontWeight: 500 }} // Font adjustments
            angle={-32} // Rotate labels for more space
            textAnchor="end" // Align labels to the end to make rotation cleaner
            interval={0} // Show all labels, no skipping
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" barSize={60}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
