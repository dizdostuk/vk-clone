import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import MyMusicTab from "./myMusicTab";
import CurrentPlaylist from "./currentPlaylist";
import Playlists from "./playlists";
import Recomendations from "./recomendations";
import FriendUpdates from "./friendUpdates";
import "./css/uiTab.css";

const UiTabs = () => {
  return (
    <div>
      <Tabs className="grid-item_ui_tabs">
        <TabList className="ui_tabs_block">
          <Tab className="ui_tab">Текущий плейлист</Tab>
          <Tab className="ui_tab">Моя музыка</Tab>
          <Tab className="ui_tab">Плейлисты</Tab>
          <Tab className="ui_tab">Рекомендации</Tab>
          <Tab className="ui_tab">Обновления друзей</Tab>
        </TabList>

        <TabPanel>
          <CurrentPlaylist />
        </TabPanel>
        <TabPanel>
          <MyMusicTab />
        </TabPanel>
        <TabPanel>
          <Playlists />
        </TabPanel>
        <TabPanel>
          <Recomendations />
        </TabPanel>
        <TabPanel>
          <FriendUpdates />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default UiTabs;
