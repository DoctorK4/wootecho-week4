import EventPlanner from './controller/EventPlanner.js';

class App {
  async run() {
    this.eventPlanner = new EventPlanner();
    await this.eventPlanner.eventPlan();
  }
}

export default App;
