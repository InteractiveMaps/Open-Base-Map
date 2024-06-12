import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./DynamicGlobe'), {
  ssr: false
});

// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift


const MoonGlobe = (props) => {
  // const { width, height } = props;
  return (
    <div>
      <DynamicMap {...props} />
    </div>
  )
}

export default MoonGlobe;