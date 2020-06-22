import React from "react";
import { Subject } from "rxjs";
import { filter } from "rxjs/operators";

export * from "./topics.js";

const mainSubject = new Subject();

export const publish = (topic, data) => mainSubject.next({ topic, data });

export class Subscriber extends React.Component {
  // Used for unsubscribing when our components unmount
  unsub = null;

  constructor(props) {
    super(props);
    this.state = { topic: props.topic, data: null };
  }

  componentDidMount() {
    this.unsub = mainSubject
      .pipe(filter(f => f.topic === this.state.topic))
      .subscribe(s => this.setState({ data: s.data }));
  }

  componentWillUnmount() {
    this.unsub.unsubscribe();
  }

  render() {
    return this.props.children(this.state.data);
  }
}
