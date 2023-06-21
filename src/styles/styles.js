import styled from "styled-components";


export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 20px;
  
  


 header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #F4EDE8;
    font-size: 20px;
    gap: 300px;

    margin-top: 20px;

    h1 a{
      text-decoration: none;
      color: #F4EDE8;
    }
}
 main{
    display: flex;
    
 }

 a svg{
    color: white;
    font-size: 25px;
    margin-left: 10px;
}
@media (max-width: 550px) {
  > header{
      gap: 90px;
   }
   
}  
  
`
export const ContainerCard = styled.div`
  
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #F4EDE8;
  margin-top: 100px;
  gap: 50px;

  .P{
   width: 500px;
   margin: auto;
  }

  >a{
   border-radius: 4px;
   padding: 15px;
   width: 200px;
   margin: auto;
   font-size: 16px;
   background-color: #FF9000;
   text-align: center;
   text-decoration: none;

   >span{
      font-size: 20px;
      font-family: sans-serif;
      color: #fff;
   }
  }
`
export const Card = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: 50px;
h3{
    font-size: 25px;
    margin-block: 10px;
}

.div{
   display: flex;
   flex-direction: column;
   width: 500px;
   
} 

img:hover{
   opacity: 0.5;
   
}

img{
    
    width: 100%;
    height: 300px;
    border-radius: 10px ;
    object-fit: cover;
    transition: all 500ms;
    
    
    
 }
 
 
 p{
    text-align: start;
    font-weight: 800;
    border-bottom: 1px solid white;
    margin-top: 10px;
    font-size: 15px;
 }
 ul{
    text-align: start;
    list-style: none;
    margin-block: 10px;
    width: 300px;

    >li{
      font-size: 14px;
    }
    
 }
 
  

 @media (max-width: 880px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    img{
      padding-inline: 70px;
    }

    
   

}

 
 

`
