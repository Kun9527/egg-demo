const getters = {
    device: state => state.app.device,
    theme: state => state.app.theme,
    color: state => state.app.color,
    multiTab: state => state.app.multiTab,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    nickname: state => state.user.name,
    welcome: state => state.user.welcome,
    roles: state => state.user.roles,
    userInfo: state => state.user.info,
    addRouters: state => state.permission.addRouters,
}
  
  export default getters
  