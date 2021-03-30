import React from 'react';
import BellIcon from 'react-bell-icon';
class Listbook extends React.Component{
     save() {
         
   // alert("Data saved successfully") 
    }
    render(){

        return(
           
<div className="App container">
<div id= "bell">
<BellIcon width='40' active={true} animate={true} /></div>
<table>
  <tr>
    <th>TITLE</th>
    <th>PRICE</th>
    <th>COMMENTS</th>
  </tr>
  <tr>
    <td>India 2020</td>
    <td>499</td>
    <td>
    <input type="textarea" rows="10" cols="45" name="title" id="title" />
</td>
  </tr>
  <tr>
    <td>Wings of fire</td>
    <td>599</td>
    <td>
    <input type="textarea" rows="10" cols="45" name="title" />
    </td>
  </tr>
  <tr>
    <td>Ingnited Minds</td>
    <td>500</td>
    <td>
    <input type="textarea" rows="10" cols="45" name="title" />
   </td>
  </tr>
  <tr>
    <td>Mission of India</td>
    <td>700</td>
    <td>
    <input type="textarea" width="200px" rows="10" cols="45" name="title" />
   </td>
  </tr>
  <tr>
    <td>Guiding souls</td>
    <td>600</td>
    <td>
    <input type="textarea" rows="10" cols="45" name="title" />
</td>
  </tr>
  <tr>
    <td>Inspiring thoughts</td>
    <td>250</td>
    <td>
    <input type="textarea" rows="10" cols="45" name="title" />
    </td>
  </tr>
  <tr>
    <td>Turning Point</td>
    <td>350</td>
    <td>
    <input type="textarea" rows="10" cols="45" name="title" />
    </td>
  </tr>
  <tr>
    <td>Indomitable spirit</td>
    <td>540</td>
    <td>
    <input type="textarea" rows="10" cols="45" name="title" />
    </td>
  </tr>
  <tr>
    <td>Spirit of India</td>
    <td>250</td>
    <td>
    <input type="textarea" rows="10" cols="45" name="title" />
    </td>
  </tr>
</table>
<br></br>
<div>


<button type="submit" className="btn btn-primary" onClick={this.save}>Save</button>

</div>
</div>




        );
    }
}



export default Listbook;
