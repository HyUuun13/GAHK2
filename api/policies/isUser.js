module.exports = async function (req, res, proceed) {
  if (req.session.user) {
    return proceed();
  }
  if (req.wantsJSON){
    res.status(401);
    return res.json('請先登入方可進行此行動，按確定前往登入頁面');
  }
  // return res.ok('<script>alert('test')</script>');
  return res.redirect('/user/login?r='+encodeURIComponent(req.url));
};
