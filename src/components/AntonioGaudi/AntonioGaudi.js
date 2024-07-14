import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false
});


const AntonioGaudi = (props) => {
  const { width, height } = props;
  return (
    <>
    <div style={{ aspectRatio: width / height }}>
      <DynamicMap {...props} />
    </div>
    </>
  )
}

export default AntonioGaudi;