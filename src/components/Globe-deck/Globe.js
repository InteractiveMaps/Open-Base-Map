import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false
});

// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift


const Globe = (props) => {
  // const { width, height } = props;
  return (
    <div>
      <DynamicMap {...props} />
    </div>
  )
}

export default Globe;