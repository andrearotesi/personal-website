import Card from '../../components/Card/Card'

const Home = () => {
  const cardTitle = (
    <span>
      Software Engineer @<a href='https://www.aodocs.com/'><u>AODocs</u></a>
      <br/>
      Mentor
    </span>
  );
  const cardSubtitle = 'CS Student, JS & CSS lover';

  return (
    <div>
      <Card title={ cardTitle } subtitle={ cardSubtitle }/>
      <h1>This is the home page</h1>
    </div>
  );
}

export default Home;