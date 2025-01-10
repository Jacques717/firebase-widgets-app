import React from 'react';

const WidgetRenderer = (screenStateData: any) => {
  return (
    <div>
      WidgetRenderer<pre>{JSON.stringify(screenStateData, null, 2)}</pre>
    </div>
  );
};

export default WidgetRenderer;
