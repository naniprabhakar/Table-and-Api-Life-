import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <div class="cards">&nbsp</div>
                <div class="half"><img src="D:\My\Images\pic_trulli.jpg" alt="Trulli" width="500" height="333"></img></div>
                <p class="line">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Etiam semper diam at erat pulvinar, at pulvinar felis blandit.</p>
            <table>
                    <tr><th>S.no</th><th>Name</th><th>Phone Number</th></tr>
                    <tr><td>1</td><td>Ravi</td><td>9291446773</td></tr>
                    <tr><td>2</td><td>Nani</td><td>9291346773</td></tr>
                    <tr><td>3</td><td>Raju</td><td>9291448773</td></tr>
                </table> 
                <br/>
                <table width="50%" border="2" cell spacing="5" call padding="10">
                    <tr><th>S.no</th><th>Name</th><th>Phone Number</th></tr>
                    <tr><td>1</td><td>Mani</td><td>9291446734</td></tr>
                    <tr><td>2</td><td>Mohan</td><td>9287346773</td></tr>
                    <tr><td>3</td><td>Rafiq</td><td>9292348773</td></tr>
                </table>
                <br />
                { /*            <table>     {*//*     rowSpan= "2"   colSpan="2"    <img src="pic_trulli.jpg" alt="Trulli" width="500" height="333"> *//*}
                    <tr><th></th><th></th></tr>
                    <tr><td></td><td></td></tr>      
                    <tr><td></td><td></td></tr>
                    <tr><td></td><td></td></tr>
                </table>*/}
            </div>
        ); 
    }
}

export default App;