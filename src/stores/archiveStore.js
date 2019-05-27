import { observable, action } from "mobx";

class ArchiveStore {
  @observable archivedStoryIds = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action archivedStory = id => this.archivedStoryIds.push(id);
}

export default ArchiveStore;
