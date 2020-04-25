import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'

import cookBook from 'images/cookbook.png'
import cookBookActive from 'images/cookbook-active.png'
import menu from 'images/menu.png'
import menuActive from 'images/menu-active.png'
import location from 'images/location.png'
import locationActive from 'images/location-active.png'
import more from 'images/more.png'
import moreActive from 'images/more-active.png'

import { CookBookContainer as CookBook } from 'pages/cookbook'
import { MenuContainer as Menu } from 'pages/menu'
import {MapContainer as Map} from 'pages/map'
import {MyCount} from 'pages/mycount'

export class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'cookbooks',
      fullScreen: true,
    }
  }
  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#000"
          barTintColor="white"
        >
          <TabBar.Item
            title="大全"
            key="cookbooks"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${cookBook}) center center /  25px 25px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${cookBookActive}) center center /  25px 25px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'cookbooks'}
            onPress={() => {
              this.setState({
                selectedTab: 'cookbooks',
              });
            }}
            data-seed="logId"
          >
            <CookBook></CookBook>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menu}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menuActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="分类"
            key="category"
            selected={this.state.selectedTab === 'category'}
            onPress={() => {
              this.setState({
                selectedTab: 'category',
              });
            }}
            data-seed="logId1"
          >
            <Menu></Menu>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${location}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${locationActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="地图"
            key="map"
            selected={this.state.selectedTab === 'map'}
            onPress={() => {
              this.setState({
                selectedTab: 'map',
              });
            }}
          >
            <Map></Map>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: more }}
            selectedIcon={{ uri: moreActive }}
            title="我的"
            key="profile"
            selected={this.state.selectedTab === 'profile'}
            onPress={() => {
              this.setState({
                selectedTab: 'profile',
              });
            }}
          >
            <MyCount/>
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default HomeContainer
