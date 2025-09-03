const a0G = (function () {
    let a = true
    return function (b, c) {
      const d = a
        ? function () {
            if (c) {
              const e = c.apply(b, arguments)
              return (c = null), e
            }
          }
        : function () {}
      return (a = false), d
    }
  })(),
  a0H = a0G(this, function () {
    return a0H
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(a0H)
      .search('(((.+)+)+)+$')
  })
a0H()
const a0I = (function () {
  let b = true
  return function (c, d) {
    const f = b
      ? function () {
          if (d) {
            const i = d.apply(c, arguments)
            return (d = null), i
          }
        }
      : function () {}
    return (b = false), f
  }
})()
;(function () {
  a0I(this, function () {
    const b = new RegExp('function *\\( *\\)')
    const c = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i')
    const d = a0L('init')
    !b.test(d + 'chain') || !c.test(d + 'input') ? d('0') : a0L()
  })()
})()
const a0J = (function () {
    let b = true
    return function (c, d) {
      const e = b
        ? function () {
            if (d) {
              const f = d.apply(c, arguments)
              return (d = null), f
            }
          }
        : function () {}
      return (b = false), e
    }
  })(),
  a0K = a0J(this, function () {
    const b = function () {
        let f
        try {
          f = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (h) {
          f = window
        }
        return f
      },
      c = b(),
      d = (c.console = c.console || {})
    const e = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
    for (let f = 0; f < e.length; f++) {
      const g = a0J.constructor.prototype.bind(a0J),
        h = e[f],
        i = d[h] || g
      g['__proto__'] = a0J.bind(a0J)
      g.toString = i.toString.bind(i)
      d[h] = g
    }
  })
a0K()
;(() => {
  const b = (() => {
    const c = navigator.userAgent || navigator.vendor || window.opera
    return (
      /wv|WebView|Android.*Version\/\d+\.\d+/i.test(c) ||
      /iPhone.*AppleWebKit(?!.*Safari)/i.test(c) ||
      window.navigator.standalone === true
    )
  })()
  b && document.documentElement.classList.add('webview')
  !Element.prototype.closest &&
    (Element.prototype.closest = function (c) {
      var d = this
      do {
        if (d.matches(c)) {
          return d
        }
        d = d.parentElement || d.parentNode
      } while (d !== null && d.nodeType === 1)
      return null
    })
  !Element.prototype.matches &&
    (Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector)
  !window.requestAnimationFrame &&
    (window.requestAnimationFrame = (c) => setTimeout(c, 16.666666666666668))
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = (d) => {
      clearTimeout(d)
    }
  }
})()
document.addEventListener('DOMContentLoaded', () => {
  const b = document.getElementById('executor-search')
  const c = document.querySelectorAll('.filter-tag'),
    d = document.querySelectorAll('.platform-section'),
    f = document.querySelectorAll('.executor-card'),
    g = document.getElementById('theme-toggle'),
    h = document.querySelectorAll('.nav-link'),
    i = document.querySelector('.nav-toggle'),
    j = document.querySelector('.nav-menu')
  const k = document.getElementById('popup')
  function l(x, y, z) {
    if (x && typeof x.addEventListener === 'function') {
      try {
        x.addEventListener(y, z)
      } catch (B) {
        console.warn('Failed to add event listener:', B)
      }
    }
  }
  g &&
    l(g, 'click', () => {
      try {
        const x = document.documentElement,
          y = x.getAttribute('data-theme') || 'dark',
          z = y === 'dark' ? 'light' : 'dark'
        x.setAttribute('data-theme', z)
        const A = g.querySelector('i')
        A &&
          (z === 'dark'
            ? (A.className = 'fas fa-moon')
            : (A.className = 'fas fa-sun'))
        try {
          localStorage.setItem('theme', z)
        } catch (C) {
          console.warn('Failed to save theme preference:', C)
        }
      } catch (E) {
        console.error('Theme toggle error:', E)
      }
    })
  try {
    const x = localStorage.getItem('theme')
    if (x && document.documentElement) {
      document.documentElement.setAttribute('data-theme', x)
      const y = g?.querySelector('i')
      if (y) {
        if (x === 'light') {
          y.className = 'fas fa-sun'
        } else {
          y.className = 'fas fa-moon'
        }
      }
    }
  } catch (A) {
    console.warn('Failed to load saved theme:', A)
  }
  if (i && j) {
    l(i, 'click', () => {
      try {
        j.classList.toggle('active')
      } catch (D) {
        console.error('Navigation toggle error:', D)
      }
    })
  }
  h.forEach((C) => {
    l(C, 'click', (F) => {
      try {
        const H = C.getAttribute('href')
        if (H && H.startsWith('#')) {
          F.preventDefault()
          const I = document.querySelector(H)
          if (I) {
            if (I.scrollIntoView) {
              try {
                I.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              } catch (J) {
                I.scrollIntoView()
              }
            }
          }
          h.forEach((K) => K.classList.remove('active'))
          C.classList.add('active')
          j && j.classList.remove('active')
        }
      } catch (M) {
        console.error('Navigation link error:', M)
      }
    })
  })
  let m = null
  if (window.IntersectionObserver) {
    try {
      const D = {
        threshold: 0.3,
        rootMargin: '-80px 0px -50% 0px',
      }
      m = new IntersectionObserver((E) => {
        E.forEach((G) => {
          if (G.isIntersecting) {
            const I = G.target.id
            h.forEach((J) => {
              J.classList.remove('active')
              J.getAttribute('href') === '#' + I && J.classList.add('active')
            })
          }
        })
      }, D)
      document.querySelectorAll('section[id]').forEach((E) => {
        m.observe(E)
      })
    } catch (E) {
      console.warn('IntersectionObserver not supported or failed:', E)
    }
  }
  const n = Array.from(f)
    .map((F) => {
      try {
        const G = F.querySelector('h3')
        return G ? G.textContent.toLowerCase() : ''
      } catch (H) {
        return ''
      }
    })
    .filter((F) => F.length > 0)
  let o
  b &&
    l(b, 'input', (G) => {
      try {
        const I = G.target.value.toLowerCase()
        clearTimeout(o)
        o = setTimeout(() => {
          q(I)
          p(I)
        }, 150)
      } catch (J) {
        console.error('Search input error:', J)
      }
    })
  function p(G) {
    try {
      const I = document.getElementById('search-suggestions')
      if (!I) {
        return
      }
      if (G.length < 2) {
        I.innerHTML = ''
        return
      }
      const J = n.filter((K) => K.includes(G) && K !== G).slice(0, 5)
      J.length > 0
        ? ((I.innerHTML = J.map(
            (K) => '<div class="suggestion-item">' + K + '</div>'
          ).join('')),
          I.querySelectorAll('.suggestion-item').forEach((K) => {
            l(K, 'click', () => {
              try {
                b &&
                  ((b.value = K.textContent),
                  q(K.textContent.toLowerCase()),
                  (I.innerHTML = ''))
              } catch (N) {
                console.error('Suggestion click error:', N)
              }
            })
          }))
        : (I.innerHTML = '')
    } catch (K) {
      console.error('Search suggestions error:', K)
    }
  }
  function q(G = '') {
    try {
      const I =
        document
          .querySelector('.filter-tag.active')
          ?.getAttribute('data-filter') || 'all'
      !G && b && (G = b.value.toLowerCase())
      f.forEach((J) => {
        try {
          const L = J.closest('section'),
            M = L ? L.id : '',
            N = J.querySelector('h3'),
            O = N ? N.textContent.toLowerCase() : '',
            P = !G || O.includes(G),
            Q = I === 'all' || M === I
          J.classList.toggle('hidden', !(P && Q))
        } catch (R) {
          console.warn('Error filtering card:', R)
        }
      })
      d.forEach((J) => {
        try {
          const K = J.querySelectorAll('.executor-card:not(.hidden)').length > 0
          J.classList.toggle('hidden', !K)
          const L = J.querySelector('.executor-count')
          if (L) {
            const M = J.querySelectorAll('.executor-card:not(.hidden)').length
            L.textContent = M
          }
        } catch (O) {
          console.warn('Error updating section:', O)
        }
      })
    } catch (J) {
      console.error('Filter executors error:', J)
    }
  }
  c.forEach((G) => {
    l(G, 'click', () => {
      try {
        c.forEach((I) => I.classList.remove('active')),
          G.classList.add('active'),
          q()
      } catch (J) {
        console.error('Filter tag error:', J)
      }
    })
  })
  let r,
    s = true
  try {
    const H = document.createElement('div')
    H.style.transform = 'translateX(1px)'
    s = H.style.transform !== ''
  } catch (I) {
    s = false
  }
  if (s) {
    l(window, 'mousemove', (L) => {
      if (r) {
        return
      }
      r = requestAnimationFrame(() => {
        try {
          const N = (L.clientX - window.innerWidth / 2) * 0.01,
            O = (L.clientY - window.innerHeight / 2) * 0.01
          document.querySelectorAll('.gradient-orb').forEach((P, Q) => {
            try {
              const R = (Q + 1) * 0.5
              P.style.transform = 'translate(' + N * R + 'px, ' + O * R + 'px)'
            } catch (S) {
              console.warn('Parallax orb error:', S)
            }
          })
        } catch (P) {
          console.warn('Parallax effect error:', P)
        }
        r = null
      })
    })
  }
  let t = null
  if (window.IntersectionObserver) {
    try {
      t = new IntersectionObserver(
        (L) => {
          L.forEach((N) => {
            if (N.isIntersecting) {
              try {
                requestAnimationFrame(() => {
                  N.target.style.opacity = '1'
                  N.target.style.transform = 'translateY(0)'
                }),
                  t.unobserve(N.target)
              } catch (Q) {
                console.warn('Animation error:', Q)
              }
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      )
      f.forEach((L) => {
        try {
          ;(L.style.opacity = '0'),
            (L.style.transform = 'translateY(30px)'),
            (L.style.transition = 'opacity 0.6s ease, transform 0.6s ease'),
            t.observe(L)
        } catch (N) {
          console.warn('Card animation setup error:', N),
            (L.style.opacity = '1'),
            (L.style.transform = 'translateY(0)')
        }
      })
    } catch (L) {
      console.warn('Animation observer error:', L)
      f.forEach((M) => {
        M.style.opacity = '1'
        M.style.transform = 'translateY(0)'
      })
    }
  } else {
    f.forEach((N) => {
      N.style.opacity = '1'
      N.style.transform = 'translateY(0)'
    })
  }
  let u = window.scrollY
  l(window, 'scroll', () => {
    try {
      const P = document.querySelector('.navbar')
      if (!P) {
        return
      }
      const Q = window.scrollY
      if (Q > 100) {
        P.style.background = 'rgba(15, 15, 35, 0.95)'
        P.style.backdropFilter !== undefined &&
          (P.style.backdropFilter = 'blur(20px)')
      } else {
        P.style.background = 'rgba(15, 15, 35, 0.8)'
        if (P.style.backdropFilter !== undefined) {
          P.style.backdropFilter = 'blur(20px)'
        }
      }
      Q > u && Q > 100
        ? (P.style.transform = 'translateY(-100%)')
        : (P.style.transform = 'translateY(0)')
      u = Q
    } catch (T) {
      console.warn('Scroll effect error:', T)
    }
  })
  function v() {
    try {
      const O = document.querySelectorAll('.btn-secondary, .btn')
      O.forEach((P) => {
        const R = P.textContent.trim(),
          S = P.getAttribute('href') || ''
        ;(R.includes('VNG') ||
          S.includes('Vng') ||
          S.includes('VNG') ||
          S.includes('Vietnam')) &&
          ((P.style.cssText =
            "\n            background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('./Flag-Vietnam.jpg') !important;\n            background-size: cover !important;\n            background-position: center center !important;\n            background-repeat: no-repeat !important;\n            color: white !important;\n            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8) !important;\n            border: 1px solid rgba(255, 255, 255, 0.3) !important;\n            font-weight: 700 !important;\n            position: relative;\n            overflow: hidden;\n          "),
          P.addEventListener('mouseenter', function () {
            this.style.background =
              'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("./Flag-Vietnam.jpg")'
            this.style.backgroundSize = 'cover'
            this.style.backgroundPosition = 'center center'
            this.style.backgroundRepeat = 'no-repeat'
            this.style.transform = 'translateY(-2px)'
            this.style.boxShadow = 'var(--shadow-lg)'
            this.style.borderColor = 'rgba(255, 255, 255, 0.5)'
          }),
          P.addEventListener('mouseleave', function () {
            this.style.background =
              'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("./Flag-Vietnam.jpg")'
            this.style.backgroundSize = 'cover'
            this.style.backgroundPosition = 'center center'
            this.style.backgroundRepeat = 'no-repeat'
            this.style.transform = 'translateY(0)'
            this.style.boxShadow = ''
            this.style.borderColor = 'rgba(255, 255, 255, 0.3)'
          }))
      })
    } catch (P) {
      console.warn('VNG styling application error:', P)
    }
  }
  v()
  try {
    q()
  } catch (O) {
    console.error('Initial filter error:', O)
  }
  document.querySelectorAll('.btn-download, .btn-premium').forEach((P) => {
    l(P, 'click', (S) => {
      try {
        if (!P.classList.contains('disabled')) {
          const T = P.innerHTML
          P.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...'
          P.style.pointerEvents = 'none'
          setTimeout(() => {
            try {
              P.innerHTML = T
              P.style.pointerEvents = 'auto'
            } catch (V) {
              console.warn('Button restore error:', V)
            }
          }, 2000)
        }
      } catch (U) {
        console.error('Button loading state error:', U)
      }
    })
  })
  document.querySelectorAll('.download-link-input').forEach((P) => {
    const R = document.createElement('div')
    R.className = 'download-link-container'
    P.parentNode.insertBefore(R, P)
    R.appendChild(P)
    const S = document.createElement('button')
    S.className = 'copy-button'
    S.innerHTML = '<i class="fas fa-copy"></i>'
    R.appendChild(S)
    S.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(P.value)
          S.innerHTML = '<i class="fas fa-check"></i>'
          S.classList.add('copied')
          setTimeout(() => {
            S.innerHTML = '<i class="fas fa-copy"></i>'
            S.classList.remove('copied')
          }, 2000)
        } else {
          P.select()
          document.execCommand('copy')
          S.innerHTML = '<i class="fas fa-check"></i>'
          S.classList.add('copied')
          setTimeout(() => {
            S.innerHTML = '<i class="fas fa-copy"></i>'
            S.classList.remove('copied')
          }, 2000)
        }
      } catch (X) {
        console.warn('Copy failed, trying fallback method:', X)
        try {
          P.select()
          document.execCommand('copy')
          S.innerHTML = '<i class="fas fa-check"></i>'
          S.classList.add('copied')
          setTimeout(() => {
            S.innerHTML = '<i class="fas fa-copy"></i>'
            S.classList.remove('copied')
          }, 2000)
        } catch (a1) {
          console.error('All copy methods failed:', a1)
        }
      }
    })
  })
  l(document, 'keydown', (P) => {
    try {
      ;(P.ctrlKey || P.metaKey) &&
        P.key === 'k' &&
        (P.preventDefault(), b && b.focus && b.focus())
      P.key === 'Escape' &&
        document.activeElement === b &&
        b && ((b.value = ''), q(), b.blur && b.blur())
    } catch (U) {
      console.warn('Keyboard shortcut error:', U)
    }
  })
  document.querySelectorAll('.status-online::before').forEach((P) => {
    P.style.animation = 'pulse 2s infinite'
  })
  const w = document.createElement('style')
  w.textContent =
    "\n    @keyframes pulse {\n      0%, 100% { opacity: 1; }\n      50% { opacity: 0.5; }\n    }\n    \n    .copy-button.copied {\n      background: var(--success) !important;\n    }\n    \n    .download-link-container {\n      position: relative;\n      margin-bottom: 1rem;\n    }\n    \n    .download-link-input {\n      width: 100%;\n      padding: 1rem 3rem 1rem 1rem;\n      background: var(--bg-card);\n      border: 1px solid var(--border-primary);\n      border-radius: 10px;\n      color: var(--text-primary);\n      font-family: 'JetBrains Mono', monospace;\n      font-size: 0.875rem;\n    }\n    \n    .copy-button {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      transform: translateY(-50%);\n      background: var(--primary);\n      color: white;\n      border: none;\n      border-radius: 6px;\n      width: 32px;\n      height: 32px;\n      cursor: pointer;\n      font-size: 0.875rem;\n      transition: var(--transition);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    \n    .copy-button:hover {\n      background: var(--primary-dark);\n      transform: translateY(-50%) scale(1.05);\n    }\n    \n    .search-suggestions {\n      position: absolute;\n      top: 100%;\n      left: 0;\n      right: 0;\n      background: var(--bg-card);\n      border: 1px solid var(--border-primary);\n      border-top: none;\n      border-radius: 0 0 12px 12px;\n      max-height: 200px;\n      overflow-y: auto;\n      z-index: 10;\n    }\n    \n    .suggestion-item {\n      padding: 0.75rem 1rem;\n      cursor: pointer;\n      transition: var(--transition);\n      text-transform: capitalize;\n    }\n    \n    .suggestion-item:hover {\n      background: var(--bg-card-hover);\n    }\n    \n    @media (max-width: 768px) {\n      .nav-menu.active {\n        display: flex;\n        position: absolute;\n        top: 100%;\n        left: 0;\n        right: 0;\n        background: var(--bg-secondary);\n        border: 1px solid var(--border-primary);\n        border-top: none;\n        flex-direction: column;\n        padding: 1rem;\n        gap: 1rem;\n      }\n    }\n  "
  document.head.appendChild(w)
})
window.showDownloadPopup = (a) => {
  console.log('Opening popup for:', a)
  const c = document.getElementById('popup')
  if (!c) {
    console.error('Popup element not found')
    return
  }
  const d = document.getElementById('bit64'),
    e = document.getElementById('bit32'),
    f = c.querySelector('h3'),
    g = c.querySelector('p')
  if (!d || !e || !f || !g) {
    console.error('Popup elements not found')
    return
  }
  f.textContent = 'Download ' + a
  g.textContent = 'Choose the appropriate version of ' + a + ' for your device:'
  const h = {
    ifk: {
      '64bit': '',
      '32bit': '',
    },
  }
  h[a]
    ? ((d.href = h[a]['64bit']), (e.href = h[a]['32bit']))
    : (console.warn('No download paths defined for ' + a),
      (d.href = '#'),
      (e.href = '#'))
  c.style.display = 'flex'
  document.body.style.overflow = 'hidden'
}
window.closePopup = () => {
  console.log('Closing popup')
  const a = document.getElementById('popup')
  if (!a) {
    return
  }
  a.style.display = 'none'
  document.body.style.overflow = ''
}
document.addEventListener('click', (a) => {
  const c = document.getElementById('popup')
  if (c && c.style.display === 'flex') {
    const d = c.querySelector('.popup-content')
    if (
      d &&
      !d.contains(a.target) &&
      a.target.id !== 'bit64' &&
      a.target.id !== 'bit32' &&
      !a.target.classList.contains('btn-download') &&
      a.target.tagName !== 'I'
    ) {
      window.closePopup()
    }
  }
})
document.addEventListener('keydown', (a) => {
  a.key === 'Escape' && window.closePopup()
})
window.copyToClipboard = (a) => {
  try {
    const d = a.parentElement.querySelector('.download-link-input')
    if (!d) {
      return
    }
    d.select()
    d.setSelectionRange(0, 99999)
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(d.value)
        .then(() => {
          const f = a.innerHTML
          a.innerHTML = '<i class="fas fa-check"></i>'
          setTimeout(() => {
            a.innerHTML = f
          }, 2000)
        })
        .catch(() => {
          try {
            document.execCommand('copy')
            const g = a.innerHTML
            a.innerHTML = '<i class="fas fa-check"></i>'
            setTimeout(() => {
              a.innerHTML = g
            }, 2000)
          } catch (h) {
            console.warn('Copy failed:', h)
          }
        })
    } else {
      try {
        document.execCommand('copy')
        const f = a.innerHTML
        a.innerHTML = '<i class="fas fa-check"></i>'
        setTimeout(() => {
          a.innerHTML = f
        }, 2000)
      } catch (g) {
        console.warn('Copy fallback failed:', g)
      }
    }
  } catch (h) {
    console.error('Copy to clipboard error:', h)
  }
}
window.addEventListener('error', (a) => {
  console.warn('Uncaught error:', a.error)
})
window.addEventListener('unhandledrejection', (a) => {
  console.warn('Unhandled promise rejection:', a.reason)
})
function a0L(a) {
  function c(d) {
    if (typeof d === 'string') {
      return function (f) {}.constructor('while (true) {}').apply('counter')
    } else {
      ;('' + d / d).length !== 1 || d % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    c(++d)
  }
  try {
    if (a) {
      return c
    } else {
      c(0)
    }
  } catch (e) {}
}
