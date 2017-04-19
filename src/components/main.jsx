import React            from 'react';
import Header           from './header';
import NotificationList from './subcomp/notification-list';
import SButton          from './subcomp/simple-button';
import Footer           from './footer';
import Notification     from './subcomp/notification';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data : []
        };

    }

    handleSubmit = (e) => {
        e.preventDefault();

        const notificationObject = {
            type    : this.nType.value,
            content : this.nBody.value,
            title   : this.nHeading.value
        };

        let newData = [notificationObject, ...this.state.data];
        this.setState({ data : newData });
    }

    updateCurrentData = (data) => {
        this.setState({ data });
    }

    content() {
        return (
            <div className = "container" id="content">
                <div className = "row">
                    <div className="panel-heading">
                        <h2 className="text-center"> React Notifier </h2>
                        <hr className="star-primary"/>
                        <br/>
                    </div>
                    <h3 className="text-center"> Use below form to simulate Notifications </h3>
                    <br/>
                    <div className="col-md-offset-3 col-md-6">
                        <div className="center-block">
                            <form onSubmit = {this.handleSubmit}>
                              <div className="form-group">
                                  <label htmlFor="comment">Select Notification Type:</label>
                                  <select className="form-control" id="ntype" ref={(options) => { this.nType = options; }} required >
                                      <option value = "">None</option>
                                      <option value = "info">Info</option>
                                      <option value = "success">Success</option>
                                      <option value = "error">Error</option>
                                  </select>
                              </div>

                              <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Heading</label>
                                <input
                                    type        = "text"
                                    className   = "form-control"
                                    id          = "nheading"
                                    placeholder = "Notification heading"
                                    ref         = {(input) => { this.nHeading = input; }}
                                    required
                                />
                              </div>

                              <div className="form-group">
                                  <label htmlFor="comment">Comment:</label>
                                  <textarea
                                      className   = "form-control"
                                      rows        = "3"
                                      id          = "nbody"
                                      placeholder = "Notification body"
                                      ref         = {(input) => { this.nBody = input; }}
                                      required
                                  >
                                  </textarea>
                              </div>
                                  <SButton
                                      classNames = "btn btn-lg btn-success center-block"
                                      inputType = "submit"
                                  >
                                      Submit
                                  </SButton>

                            </form>
                        </div>
                    </div>
                    <NotificationList data={this.state.data} updateCurrentData = {this.updateCurrentData} />
                </div>
            </div>
        );
    }

    render() {
        return (
               <div>
                   <Header />
                   {this.content()}
                   <Footer />
               </div>
        );
    }

}
