import * as React from 'react';
import BaseLayout from 'layouts/BaseLayout';

export interface HomeProps {
  
}
 
const Home: React.SFC<HomeProps> = () => {
  return (<BaseLayout body={<div/>} />);
}
 
export default Home;