import './HeaderCard.css';

function HeaderCard({ Data }) {
  console.log(Data)
  return (
    <div className="">
      <img src={Data.logo} />
      <h1>
        {Data.faculty.name}
      </h1>
      <h1>
        {Data.name}
      </h1>
      <h1>
        {Data.faculty.university.name}
      </h1>
      <img src="./assets/icon/page-1.png"
        srcSet="./assets/icon/page-1@2x.png 2x,
             ./assets/icon/page-1@3x.png 3x"/>
      <div className='line'/>
    </div>

  );
}

export default HeaderCard;
