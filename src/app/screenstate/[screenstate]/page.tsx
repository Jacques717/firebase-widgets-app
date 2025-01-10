import { ref, get } from 'firebase/database';
import { database } from '../../../../firebase';
import WidgetRenderer from '../../../components/WidgetRenderer';

// This is a Server Component by default in app directory
const ScreenState = async (props: {
  params: Promise<{ screenstate: string }>;
}) => {
  const params = await props.params;
  console.log(`params: ${JSON.stringify(params)}`);
  const screenstateId = params.screenstate;

  // Server-side data fetching
  const screenStateRef = ref(database, `screenStates/${screenstateId}`);
  const snapshot = await get(screenStateRef);

  if (!snapshot.exists()) {
    console.log('No data available');
    return <div>No data available for ScreenState: {screenstateId}</div>;
  }

  const screenStateData = snapshot.val();
  //console.log(screenStateData);

  return (
    <div>
      <h1>ScreenState: {screenstateId}</h1>

      <WidgetRenderer screenStateData={screenStateData} />
    </div>
  );
};

export default ScreenState;
