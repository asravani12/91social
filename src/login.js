import React,{component} from 'react';
import './login.css';
class Loginform extends React.Component
{
    render()
    {
        return(
          <form>
              <table>
                  <tr>
                      <th>
                          <label>
                              Username:
                          </label>
                          <th><input type="text" classname="text-feild" placeholder="firstname"/></th>
                          <th><input type="text" classname="text-feild" placeholder="firstname"/></th>
                      </th>
                  </tr>
                   <br/>
                   <tr>
                       <th>
                           <label>
                               email:
                           </label>
                           <th><input type="text" classname="text-feild" placeholder="email"/></th>
                       </th>
                   </tr>
                   <br/>
                    <tr>
                        <th>
                            <label>
                                password:
                            </label>
                            <th><input type="text" classname="text-feild" placeholder="firstname"/></th>
                        </th>
                    </tr>
                    <br/>
                    <tr>
                        <th>
                            <label>
                                Address:
                            </label>
                            <th><input type="text" classname="text-feild" placeholder="Address"/></th>
                        </th>
                    </tr>
                    <br/>
                    <tr>
                        <th>
                            <label>
                                phone:
                            </label>
                            <th><input type="text" classname="text-feild" placeholder="phone"/></th>
                        </th>
                    </tr>
                    <br/>
                    <button classname="submit">Next</button>
              </table>
          </form>
        );
    }
}
export default Loginform ;