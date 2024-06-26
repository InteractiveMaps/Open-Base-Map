import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false
});

// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift


const WW1Map = (props) => {
  return (
    <>
    <div>
      <DynamicMap {...props} />
    </div>
    </>
  )
}

export default WW1Map;