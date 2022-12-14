# React Applications 

Date 30/11/2022

### 000_use_params_in-componnent
* how to use param in component

```html
      <SayHello name="Liat" color="red" />
```

### 001_loops
* How to render loops using array map
* We Learend about the key attribute - key have to be unique
* Learn about Virtual Dom 

### 002_onclick
* We used onClick event

### 003_counter
* Use useState to save to show the component state 

### 004_conditional_render
* show different method for conditional rendering

### 005_children
* example for using component with render

### 006_onChange
* show how to use on change with useState to show input value dynamic change

### homework
* disable the minus button of the counter with it 0
* bonus exercise build and app for multiple search engines

Date 7/12/2022
### 007_onChange_with_button
* change state with button click

## Real App Design
### 500_App_layout
* build basic app layout

### Homework
* Build an App template with 3 pages  page1, page2, page3 Header, Footer and Main
* add Router component in the App component with 3 buttons 
* pressing the buttons will show the right page

```react
function Router() {
  function PagesView() {
    return <AboutPage />;
  }

  return (
    <div>
      <button>Page1</button>
      <button>Page2</button>
      <button>Page3</button>
      <PagesView />
    </div>
  );
}
```

### 501_App_layout_with_MUI
* Install MUI 
```bash
npm install @mui/material @emotion/react @emotion/styled
```
* Add MUI components to the Header and Footer


Date 11/12/2022

### Solve Homework router version 1
### Solve Homework router version 2

### Add react router
* Add react router v6.4
* add Link to pages
* add Navlinks to App Navbar

### Homework
* Create a game to choose number between 0 - 99 
* The program will choose number randomly.
  Math.floor(Math.random() * 100);

* Your number is high
* Your number is low
* YOU WON <button>Play Again<button>

Bonus
* Create codesandbox and put the code there.


Date 14/12/2022

### 008 events - how to create custom events
### 009 props type - 
* how to use basic proptyes like numer, string, boolean, func  
* [PropTypes in react documentaioin](https://reactjs.org/docs/typechecking-with-proptypes.html)
* We learned how to use shate to create new prop type

### Homework for 14/12/2022
* Create A Employee component that accept the following properties
** Name:  required
** lastName:  required
** Job Title: optional
** avatar: image type with url and alt
** isAdmin: optional
** childrensName: worker real life childrens - optional
* Use prop types to validate the properties.
* transfer the data to the component from parent component and display it nicely :)
* Bonus use MUI components

# Links

[Course Repo](https://github.com/bk-software/hu-react-redux)

[Github Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

[Codesandbox - online development idea](https://codesandbox.io/)
[MUI Colors palette](https://mui.com/material-ui/customization/palette/)
[MUI Templates examples](https://mui.com/material-ui/getting-started/templates/)
[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

### installations

#### react mui
```bash
npm install @mui/material @emotion/react @emotion/styled
```
#### react router
```bash
npm install react-router-dom
```