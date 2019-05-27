import { configure } from "mobx";

import StoryStore from "./storyStore";
import ArchiveStore from "./archiveStore";

configure({
  enforeceActions: "observed"
});
class RootStore {
  constructor() {
    this.storyStore = new StoryStore(this);
    this.archiveStore = new ArchiveStore(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
