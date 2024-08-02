n.d(t, {
  P: function() {
return M;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(512722),
  r = n.n(a),
  l = n(91192),
  o = n(873011),
  c = n(442837),
  u = n(524437),
  d = n(481060),
  _ = n(904245),
  E = n(724757),
  I = n(294218),
  m = n(373662),
  T = n(240126),
  h = n(695346),
  N = n(675478),
  C = n(581883),
  f = n(592125),
  p = n(768943),
  g = n(767893),
  S = n(689938),
  A = n(144754);
let R = {
offset: {
  left: 4,
  right: -12
}
  },
  O = e => {
N.hW.updateAsync('forLater', t => {
  if (t.currentTab === e)
    return !1;
  t.currentTab = e;
}, N.fy.FREQUENT_USER_ACTION);
  };

function x(e) {
  let {
closePopout: t
  } = e, n = (0, c.e7)([C.Z], () => {
var e, t;
return null !== (t = null === (e = C.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : u.Pr.ALL;
  }), s = (0, c.Wu)([
p.Z,
C.Z
  ], () => {
var e, t;
let n = p.Z.getMessageReminders(),
  i = p.Z.getMessageBookmarks(),
  s = null !== (t = null === (e = C.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : u.Pr.ALL;
return s === u.Pr.ALL ? [
  ...n,
  ...i
] : s === u.Pr.BOOKMARKS ? i : n;
  }), a = (0, c.e7)([p.Z], () => p.Z.getOverdueMessageReminderCount());
  return (0, i.jsx)(d.Dialog, {
'aria-label': S.Z.Messages.FOR_LATER,
children: (0, i.jsxs)('div', {
  className: A.popoutContainer,
  children: [
    (0, i.jsxs)('div', {
      children: [
        (0, i.jsxs)('div', {
          className: A.headerTitle,
          children: [
            (0, i.jsx)(d.TagIcon, {
              size: 'md',
              color: 'currentColor',
              className: A.headerTitleIcon
            }),
            (0, i.jsx)(d.Heading, {
              variant: 'heading-lg/semibold',
              children: S.Z.Messages.FOR_LATER
            })
          ]
        }),
        (0, i.jsx)('div', {
          children: (0, i.jsxs)(d.TabBar, {
            type: 'top',
            look: 'brand',
            selectedItem: n,
            onItemSelect: O,
            className: A.tabBar,
            children: [
              (0, i.jsx)(d.TabBar.Item, {
                id: u.Pr.ALL,
                className: A.tabBarItem,
                children: S.Z.Messages.FOR_LATER_TAB_ALL
              }),
              (0, i.jsx)(d.TabBar.Item, {
                id: u.Pr.BOOKMARKS,
                className: A.tabBarItem,
                children: S.Z.Messages.MESSAGE_BOOKMARKS_HEADER
              }),
              (0, i.jsx)(d.TabBar.Item, {
                id: u.Pr.REMINDERS,
                className: A.tabBarItem,
                children: S.Z.Messages.FOR_LATER_TAB_REMINDERS.format({
                  count: a
                })
              })
            ]
          })
        })
      ]
    }),
    (0, i.jsx)(v, {
      savedMessages: s,
      closePopout: t
    })
  ]
})
  });
}

function M(e) {
  let {
onOpen: t,
onClose: n,
children: a,
popoutPosition: r,
popoutAlign: l
  } = e, [o, c] = s.useState(!1), u = s.useCallback(() => {
c(!1), o && (null == n || n());
  }, [
n,
o
  ]), _ = s.useCallback(() => {
c(!o), o ? null == n || n() : null == t || t();
  }, [
n,
t,
o
  ]);
  return (0, i.jsx)(d.Popout, {
animation: d.Popout.Animation.NONE,
position: r,
align: l,
autoInvert: !1,
shouldShow: o,
onRequestClose: u,
renderPopout: function() {
  return (0, i.jsx)(x, {
    closePopout: u
  });
},
ignoreModalClicks: !0,
children: (e, t) => {
  let {
    isShown: n
  } = t;
  return a(_, n, e);
}
  });
}

function v(e) {
  let {
savedMessages: t,
closePopout: n
  } = e, a = s.useRef(null), r = (0, E.Z)('for-later', a);
  return 0 === t.length ? (0, i.jsx)(P, {}) : (0, i.jsx)(l.bG, {
navigator: r,
children: (0, i.jsx)(l.SJ, {
  children: e => {
    let {
      ref: s,
      ...r
    } = e;
    return (0, i.jsx)(d.AdvancedScrollerThin, {
      ref: e => {
        var t;
        a.current = e, s.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
      },
      className: A.messagesScroller,
      ...r,
      children: t.map(e => (0, i.jsx)(L, {
        savedMessage: e,
        closePopout: n
      }, ''.concat(e.saveData.messageId, '-').concat(e.saveData.type)))
    });
  }
})
  });
}

function L(e) {
  let {
savedMessage: t,
closePopout: n
  } = e, a = (0, c.e7)([f.Z], () => f.Z.getChannel(t.saveData.channelId));
  return (s.useCallback(e => {
!e.shiftKey && n(), _.Z.jumpToMessage({
  channelId: t.saveData.channelId,
  messageId: t.saveData.messageId,
  flash: !0
});
  }, [
n,
t
  ]), null == a || null == t.message) ? (0, i.jsx)('div', {
children: 'The message isn\'t accessible. We will deal with this later.'
  }) : (0, i.jsxs)('div', {
className: A.messageContainer,
children: [
  (0, i.jsx)(g.Z, {
    channel: a
  }),
  (0, i.jsx)(I.Z, {
    message: t.message,
    channel: a,
    className: A.message,
    compact: h.jU.getSetting(),
    animateAvatar: !1,
    focusProps: R,
    trackAnnouncementViews: !0
  }, t.message.id),
  (0, i.jsx)(m.Z, {
    className: A.hoverBar,
    children: (0, i.jsx)(Z, {
      savedMessage: t,
      channel: a
    })
  })
]
  });
}

function Z(e) {
  let {
savedMessage: t,
channel: n
  } = e;
  return r()(null != t.message, 'Saved message is undefined'), t.saveData.type === o.J.REMINDER ? (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(m.s, {
    channel: n,
    label: S.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
    icon: d.CheckmarkSmallBoldIcon,
    message: t.message,
    onClick: () => null
  }, 'mark-complete'),
  (0, i.jsx)(m.s, {
    channel: n,
    label: S.Z.Messages.MESSAGE_REMINDERS_EDIT,
    icon: d.ClockIcon,
    message: t.message,
    onClick: () => null
  }, 'edit-reminder'),
  (0, i.jsx)(m.s, {
    channel: n,
    label: S.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE,
    icon: d.TrashIcon,
    message: t.message,
    dangerous: !0,
    onClick: () => null
  }, 'delete-reminder')
]
  }) : (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(m.s, {
    channel: n,
    label: S.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
    icon: d.ClockIcon,
    message: t.message,
    onClick: () => null
  }, 'add-reminder'),
  (0, i.jsx)(m.s, {
    channel: n,
    label: S.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK,
    icon: d.TrashIcon,
    message: t.message,
    dangerous: !0,
    onClick: () => null
  }, 'delete-bookmark')
]
  });
}

function P() {
  return (0, i.jsx)(T.Z, {
Icon: d.DoubleCheckmarkLargeIcon,
header: S.Z.Messages.FOR_LATER_EMPTY,
tip: S.Z.Messages.MESSAGE_BOOKMARKS_EMPTY_TIP
  });
}