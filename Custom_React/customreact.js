function customRender(reactElement,container){
  const domElement=document.createElement(reactElement.type)
  domElement.innerHTML=reactElement.children
  domElement.setAttribute('href',reactElement.props.href)
  domElement.setAttribute('target',reactElement.props.target)
  container.appendChild(domElement)
}
const reactElement={//how React treats an anchor tag
  type:'a',//type of element
  props:{//properties
    href:"https:google.com",
    target:'_blank'
  },
  children:'Click me to visit google'
}
//wrong as if set attribute ik ik element ka hota to very time consuming
const mainContainer=document.querySelector('#root')

//render matlab given elment ko root mai inject kar de

customRender(reactElement,mainContainer)//element,kha inject karna hai