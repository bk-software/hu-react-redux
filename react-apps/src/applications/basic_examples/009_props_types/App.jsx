import MyComp from './MyComp';
import MyComp2 from './MyComp2';

function App() {
  return (
    <div>
      <MyComp name="Liron" num={9} />
      <MyComp2 image={{ url: 'string', alt: 'image alt' }}>
        <div>my children</div>
        <div>my children</div>
      </MyComp2>
    </div>
  );
}

export default App;
