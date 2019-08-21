import React from 'react';

import { SpinnerContainer, SpinnerOverlay} from '/withSpinnerStyles'

//withSpinner is HOC as parameter is component
//WrapperComponent is being wrapped by withSpinner
const withSpinner = WrappedComponent => {

  const Spinner => ({isLoading, ..otherProps} ) => {
  return
    isLoading
    ?
    (
     <SpinnerOverlay>
       <SpinnerContainer />
      </SpinnerOverlay>
    )
    :
    (<WrappedComponent   {...otherProps}   />)
  )}
  return Spinner;
}
export default WithSpinner;
// const withSpinner = WrappedComponent => ({isLoading, ..otherProps} ) => {
//   return
//     isLoading
//     ?
//     (
//      <SpinnerOverlay>
//        <SpinnerContainer />
//       </SpinnerOverlay>
//     )
//     :
//     (<WrappedComponent   {...otherProps}   />)
// }
// export default WithSpinner;

