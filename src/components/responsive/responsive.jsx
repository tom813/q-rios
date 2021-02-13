import React from 'react';
import { useGrace, Show } from 'react-gracefully';

/* export const Page = () => {
  const { is } = useGrace();
  const isMobile = is.mobile();
  const isTablet = is.tablet();
  const isDesktop = is.tablet();
  const isAndroid = is.device('android');
  return (
    <div style={{padding: '200px'}}>
      {isAndroid && <h2>Android Title</h2>}
      {isMobile && <h2>Mobile Title</h2>}
      {(isTablet || isDesktop) && <h1>Tablet or Desktop Title</h1>}dsfgdsgfsdfg
    </div>
  );
}; */

export const Page = () => {
    const { is } = useGrace();
    const isAboveSmall = is.above.breakpoint('sm');
    const isBelowLarge = is.below.breakpoint('lg');
    const isMedium = is.current.breakpoint('md');
    return (
    <div style={{padding: '200px'}}>
        {isAboveSmall && isBelowLarge && isMedium && <h2>Medium Title</h2>}
        <Show show={['mobile']}>
            <p style={{color: 'black'}}>yöxlkcjyölxc <br />asdasd<br />asdasd<br />asdasd<br />asdasd<br />asdasd<br />asdasd<br />asdasd<br />asdasd<br />asdasd</p>
        </Show>
        <Show show={['desktop']}>
            yöxlkcjyölxc
        </Show>sddgfdsfgsdfgsd
    </div>
    );
  };


export default Page;