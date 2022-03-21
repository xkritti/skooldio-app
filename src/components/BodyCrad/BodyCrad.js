import './BodyCrad.css';
import ContentDetail from './ContentDetail';
import ContentFooter from './ContentFooter';
import ContentHeader from './ContentHeader';

function BodyCrad() {
  return (
    <div className="">
      <ContentHeader />
      <ContentDetail/>
      <ContentFooter/>
      <div className='line'/>
    </div>
  );
}

export default BodyCrad;
