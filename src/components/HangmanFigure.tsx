export default function HangmanFigure() {
  const gallowsLines = [
    { x1: 40, y1: 180, x2: 160, y2: 180 },
    { x1: 60, y1: 20, x2: 60, y2: 180 },
    { x1: 60, y1: 20, x2: 140, y2: 20 },
    { x1: 140, y1: 20, x2: 140, y2: 50 },
  ];
  return (
    <svg width='200' height='200' viewBox='0 0 200 200'>
      {gallowsLines.map((line, index) => (
        <line key={index} {...line} className='stroke-gray-200 stroke-[4px]' />
      ))}
    </svg>
  );
}
