import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./DynamicGlobe'), {
  ssr: false
});

const F1Globe = (props) => {
  return (
    <div>
      <DynamicMap {...props} />
    </div>
  )
}

export default F1Globe;