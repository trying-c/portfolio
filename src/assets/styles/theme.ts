
import { type GlobalThemeOverrides } from "naive-ui"
export const themeOverrides: GlobalThemeOverrides = {
    common: {
        // 基础色系
        primaryColor: ' #6366f1',        // 主紫色
        primaryColorHover: ' #8183f4',   // 主色增亮
        primaryColorPressed: ' #4f52c1', // 主色加深
        primaryColorSuppl: ' #a855f7',   // 次紫色

        infoColor: ' #6366f1',           // 信息色同步主色
        infoColorHover: ' #8183f4',      // 信息色同步主色增亮
        infoColorPressed: ' #4f52c1',    // 信息色同步主色加深
        successColor: ' #22c55e',        // 高饱和绿
        warningColor: ' #f59e0b',        // 琥珀黄
        errorColor: ' #ef4444',          // 警示红

        // 文字体系
        textColorBase: ' #0f172a',
        textColor1: ' #0f172a',
        textColor2: ' #475569',
        textColor3: ' #64748b',

        // 背景与边框
        borderColor: 'rgba(255,255,255,0.1)',  // 透明白边框
        hoverColor: ' #e2e8f0',         // 原 #f1f5f9 → 调整为slate-200 

        bodyColor: ' #f8fafc', // 新增自定义字段
        railColor: ' #f1f5f9',

        popoverColor: ' #ffffff'         // 弹出层纯白
    },

    LoadingBar: {
        colorLoading: " #3A6FE6",
        colorError: " #E65454",
        height: "3px",
    },

    Layout: {
        color: ' #ffffff',         // 主容器背景 
        // 基础配置
        siderColor: ' #ffffff',           // 纯白背景
        // siderBorderColor: ' #e8e5ff',     // 右侧浅紫边线(主色10%混合)

        // Sider 配置 
        siderBorderColor: 'rgba(123, 97, 255, 0.15)', // 主色15%透明度边框
        siderMenuHoverShadow: 'inset 4px 0 12px -6px rgba(123, 97, 255, 0.18)', // 左内阴影
        // 主色交互 
        siderMenuActiveBorder: ' #7B61FF', // 左侧4px紫条
        siderTextColorHover: ' #7B61FF',   // 悬停文字变色
        siderToggleBarColor: 'rgba(157, 134, 255, 0.15)',
        siderToggleBarColorHover: 'rgba(123, 97, 255, 0.2)',

        // 基础配置
        headerColor: ' #ffffff',          // 纯白背景
        headerBorderColor: ' #f1f1f1',    // 底部浅灰分割线
        headerTextColor: ' #333333',      // 深灰文字

        // 主色细节
        headerBoxShadow: '0 2px 8px rgba(123, 97, 255, 0.25)', // 浅紫投影
        headerIconColor: ' #7B61FF',      // 主色图标
        headerButtonHoverBorder: ' #7B61FF20', // 悬停淡紫边框(12%透明度)
        headerActiveIndicator: ' #7B61FF', // 选中态下划线 
    },
    Divider: {
        color: ' #e2e8f0',         // 分割线颜色
        textColor: ' #64748b'       // 分隔文字颜色
    },
    Space: {
        gap: '16px',              // 间距组件默认间隔
        gapLarge: '24px',
        gapSmall: '8px'
    },

    Form: {
        labelTextColor: ' #475569',
        feedbackTextColor: ' #64748b',
        // 新增以下配置
        labelFontWeight: '600',
        labelMargin: '0 0 8px 4px',
        labelFontSize: '14px',
        feedbackPadding: '6px 0 0 4px',
        feedbackHeight: '22px',
        feedbackBorderRadius: '4px',
        feedbackColorHover: ' #f1f5f9'
    },
    Input: {
        border: '1px solid #e2e8f0',
        borderHover: '1px solid #94a3b8',
        borderFocus: '2px solid #6366f1',
        boxShadowFocus: '0 0 0 2px rgba(99,102,241,0.1)',
        borderRadius: '8px',
        color: ' #ffffff',
        colorFocus: ' #ffffff',
        placeholderColor: ' #94a3b8',
        // 新增图标配置
        iconColor: ' #64748b',
        iconColorFocus: ' #6366f1',
        // 悬浮效果增强
        boxShadowHover: '0 2px 6px rgba(99,102,241,0.05)',
        paddingMedium: '12px 14px'
    },
    Button: {
        // 基础色系增强
        colorPrimary: '  #6366f1',
        colorHoverPrimary: '  #4f46e5',    // 色相向深蓝偏移
        colorPressedPrimary: '  #4338ca',  // 增加按压深度

        // 悬停视觉体系
        borderHoverPrimary: '2px solid  #4f46e5',  // 加粗悬浮边框
        boxShadowHover: '0 3px 6px rgba(99, 102, 241, 0.2)', // 投影增强
        textColorHover: ' #8183f4', // 文字微变化

        // 动态效果参数
        transformScaleHover: 1.02,       // 悬停时放大2%
        transitionDuration: '0.25s',     // 动画加速

        // 状态指示强化
        borderFocusPrimary: '2px solid  #a855f7', // 聚焦状态使用次色
        boxShadowFocus: '0 0 0 3px rgba(168,85,247,0.2)', // 聚焦光晕

        borderRadiusMedium: '8px',
        fontSizeMedium: '16px',
        // 增加按钮悬停层级   
        colorFocusPrimary: ' #6366f166', // 带透明度
        colorDisabledPrimary: ' #c7d2fe' // 禁用态
    },
    Card: {
        borderRadius: '16px',
        titleTextColor: ' #0f172a',      // 深蓝黑标题
        actionColor: ' #64748b',          // 操作图标色  
        borderRadiusHover: '16px', // 圆角同步
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)', // 动画曲线 
        borderHover: '1px solid #e2e8f0', // 静态边框 
        titleTextColorHover: ' #0f172a', // 保持原色
        headerBorderColorHover: 'transparent', // 隐藏底部边线  
        colorEmbedded: ' #fcfaff', // 原#ffffff → 浅紫调白 (新增)
        colorEmbeddedModal: ' #f8f5ff', // 弹窗卡片专用
        borderColor: ' #e9e5ff',   // 浅紫灰边框 (原#e2e8f0)
        // 悬停效果联动
        hoverColor: ' #f5f2ff',    // 微紫悬停背景
        boxShadowHover: '0 4px 12px rgba(99,102,241,0.08)' // 紫色系投影
    },

    Alert: {
        colorInfo: ' #e0e7ff',           // 浅紫背景
        colorSuccess: ' #dcfce7',        // 浅绿背景
        borderInfo: ' #c7d2fe'           // 信息边框
    },
    Tag: {
        colorInfo: ' #e0e7ff',           // 浅紫标签
        borderRadius: '6px',
        textColorInfo: ' #6366f1'        // 主紫文字
    },
    GradientText: {
        colors: [' #6366f1', ' #a855f7']  // 双紫渐变
    },
    Select: {
        peers: {
            InternalSelection: {
                borderRadius: '8px',
                borderActive: '2px solid #8183f4',
                borderFocus: '2px solid #8183f4',
                boxShadowFocus: '0 0 0 2px rgba(129,131,244,0.2)',
                arrowColor: ' #94a3b8',
                // arrowColorActive: ' #8183f4',
                // transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
            },
            InternalSelectMenu: {
                optionColorActive: 'rgba(99,102,241,0.15)',
                optionTextColorActive: ' #8183f4',
                borderRadius: '8px',
                // boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }
        }
    },
    Menu: {
        itemColorActive: ' #e0e7ff',
        itemColorActiveHover: ' #c7d2fe',
        itemTextColorActive: ' #6366f1'
    },
    Table: {
        thColor: ' #f1f5f9',
        tdColorHover: ' #f8fafc',
        borderColor: ' #e2e8f0'
    },
    Pagination: {
        itemColorActive: ' #6366f1',
        itemColorHover: ' #e0e7ff'
    },
    Message: {
        colorInfo: ' #e0e7ff',
        borderInfo: '1px solid #c7d2fe'
    },
    Notification: {
        colorInfo: ' #e0e7ff',
        borderInfo: '1px solid #c7d2fe'
    },
    // 新增组件配置
    Checkbox: {
        labelTextColor: ' #cbd5e1',
        labelTextColorChecked: ' #f8fafc',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadowPressed: 'inset 0 2px 4px rgba(0,0,0,0.1)',
        colorChecked: ' #6366f1',
        // 新增边框配置
        border: '1px solid #cbd5e1',       // 未选中状态边框
        borderChecked: '1px solid #6366f1',// 选中状态边框
        borderHover: '1px solid #94a3b8',  // 悬停状态边框
        // 新增选框背景色
        color: ' #ffffff',                  // 未选中背景
        // colorChecked: ' #ffffff',           // 选中后背景
        // 增强可视性
        boxShadowFocus: '0 0 0 2px rgba(99,102,241,0.3)', // 聚焦光晕
        // 勾选图标颜色
        checkMarkColor: ' #6366f1',         // 修正勾选颜色
        checkMarkColorDisabled: ' #cbd5e1',
        // 标签间距优化
        labelPadding: '0 0 0 8px'
    },
    Radio: {
        dotColorActive: ' #8183f4',
        buttonColorActive: 'rgba(99,102,241,0.15)',
        buttonBorderRadius: '8px',
        buttonPadding: '8px 12px',
        // dotColorActive: ' #6366f1',
        boxShadowFocus: '0 0 0 2px rgba(99,102,241,0.2)'
    },
    Switch: {
        boxShadowActive: '0 0 8px rgba(129,131,244,0.5)',
        railColorActive: 'linear-gradient(145deg, #8183f4 0%, #c084fc 100%)', // 渐变轨道
        // railColorActive: ' #6366f1',
        boxShadowFocus: '0 0 0 2px rgba(99,102,241,0.2)'
    },
    Slider: {
        fillColor: ' #6366f1',
        handleColor: ' #ffffff',
        handleBoxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    Progress: {
        indicatorColor: ' #6366f1',
        railColor: ' #e2e8f0'
    },
    Avatar: {
        color: ' #e0e7ff',       // 浅紫色背景
        textColor: ' #6366f1'    // 主紫色文字
    },
    Badge: {
        color: ' #ef4444',       // 错误红
        textColor: ' #ffffff'
    },
    Tooltip: {
        color: ' #0f172a',       // 深色背景
        textColor: ' #ffffff'
    },
    // ====== 新增配置 ======
    Empty: {
        iconColor: ' #cbd5e1',          // slate-300
        textColor: ' #64748b'           // slate-500
    },
    Timeline: {
        itemColor: ' #e2e8f0',          // slate-200
        titleTextColor: ' #0f172a'      // slate-900
    },
    Log: {
        itemColor: ' #f8fafc',          // 浅灰背景
        borderColor: ' #e2e8f0'         // slate-200
    },
    Collapse: {
        titleTextColor: ' #0f172a',     // 深色标题
        arrowColor: ' #64748b'          // slate-500
    },
    // ====== 新增配置 ======
    DatePicker: {
        panelColor: ' #ffffff',
        itemColorActive: ' #6366f1',    // 选中日期
        itemTextColorActive: ' #ffffff'
    },
    TimePicker: {
        panelColor: ' #ffffff',
        itemColorActiveHover: ' #e0e7ff'// indigo-50
    },
    Upload: {
        draggerColor: ' #f8fafc',       // 拖拽区背景
        draggerBorder: '2px dashed #e2e8f0'
    },
    // ====== 新增配置 ======
    Drawer: {
        color: ' #ffffff',              // 纯白背景
        headerBorderColor: ' #e2e8f0'   // slate-200
    },
    Modal: {
        color: ' #ffffff',
        boxShadow: '0 12px 32px rgba(0,0,0,0.1)' // 柔和投影
    },
    Tabs: {
        tabTextColorActive: ' #6366f1', // 主色激活态
        tabTextColorHover: ' #475569'   // slate-600
    },
    Tree: {
        nodeColorActive: ' #e0e7ff',    // indigo-50
        nodeTextColorActive: ' #6366f1'
    },
    // ====== 新增配置 ======
    Transfer: {
        borderColor: ' #e2e8f0',        // slate-200
        headerColor: ' #f1f5f9'         // slate-50
    },
    Cascader: {
        menuColor: ' #ffffff',          // 纯白菜单
        optionColorActive: ' #e0e7ff'   // indigo-50
    },
    ColorPicker: {
        panelColor: ' #ffffff',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }
}

export const darkThemeOverrides: GlobalThemeOverrides = {
    common: {
        primaryColor: ' #8183f4',        // 提亮主色（原hover色）
        primaryColorHover: ' #9b9df6',   // 暗模式增亮
        primaryColorPressed: ' #6366f1', // 恢复基础主色
        primaryColorSuppl: ' #c084fc',   // 次紫色增亮

        infoColor: ' #8183f4',           // 信息色同步调整
        infoColorHover: ' #9b9df6',   // 暗模式增亮
        infoColorPressed: ' #6366f1', // 恢复基础主色
        infoColorSuppl: ' #c084fc',   // 次紫色增亮
        successColor: ' #4ade80',        // 提亮绿色
        warningColor: ' #fbbf24',        // 提亮琥珀色
        errorColor: ' #f87171',         // 柔化红色

        // 增强文本对比度
        textColorBase: ' #f8fafc',      // 原 #e5e7eb → 提亮为slate-50
        textColor1: ' #f8fafc',
        textColor2: ' #cbd5e1',         // slate-300
        textColor3: ' #94a3b8',         // slate-400

        // 悬停系统强化
        hoverColor: 'rgba(255,255,255,0.12)',  // 透明度翻倍 

        // 背景系统
        popoverColor: ' #1e293b',       // 更深背景
        bodyColor: ' #0f172a',           // 新增全局背景色
        railColor: 'rgba(255,255,255,0.05)'
    },
    LoadingBar: {
        colorLoading: " #155942FF",
        colorError: " #FF6B6B",
        height: "3px",
    },
    Layout: {
        color: ' #1b1a2c',         // 主容器深紫背景
        siderColor: ' #252342',     // 侧边栏加深背景
        siderBorderColor: 'rgba(129,131,244,0.15)', // 紫色光晕 
        siderToggleBarColor: 'rgba(157, 134, 255, 0.15)',
        siderToggleBarColorHover: 'rgba(157, 134, 255, 0.25)',
        headerColor: ' #2a2848'     // 头部深紫背景
    },
    Divider: {
        color: 'rgba(255,255,255,0.08)', // 微透明白线
        textColor: ' #94a3b8'       // 浅灰文字
    },
    Space: {
        gap: '16px',
        gapLarge: '24px',
        gapSmall: '8px'
    },

    Button: {
        colorPrimary: ' #8183f4',
        colorHoverPrimary: ' #6366f1',  // 悬停恢复基础主色

        boxShadowHover: '0 2px 6px rgba(99,102,241,0.3)', // 紫色投影
        borderHover: '1px solid rgba(99,102,241,0.8)', // 光晕效果
        borderHoverPrimary: '2px solid #6366f1',

        textColorHover: 'rgba(255,255,255,0.95)',
        textColorText: ' #ffffff',       // 保持白字 

        borderRadiusMedium: '8px',      // 保持圆角一致
        fontSizeMedium: '16px',

        colorPressedPrimary: ' #6366f1',
        colorFocusPrimary: ' #8183f466', // 透明度调整
        colorDisabledPrimary: ' #3730a3' // 深紫色禁用态
    },
    Card: {
        // 背景色调整为浅紫灰，与主色完美融合
        color: ' #2d2846',                   // HSL(255°, 28%, 22%)
        border: '1px solid rgba(129,131,244,0.2)',
        boxShadow: '0 4px 24px rgba(99,102,241,0.15)',

        // 动态光效系统
        hoverColor: ' #373066',              // HSL(249°, 28%, 28%)
        borderHover: '1px solid rgba(129,131,244,0.4)',
        boxShadowHover: '0 8px 32px rgba(129,131,244,0.25)',

        // 层级渐变背景
        backgroundImage: `
    linear-gradient(
      145deg,
      rgba(129,131,244,0.08) 0%,
      rgba(99,102,241,0.03) 50%,
      transparent 100%
    )
  `,

        // 标题与文字优化
        titleTextColor: ' #e6e4ff',          // HSL(247°, 100%, 95%)
        titleFontSize: '18px',
        dividerColor: 'rgba(129,131,244,0.15)'
    },
    Alert: {
        colorInfo: 'rgba(99,102,241,0.15)',  // 透明紫背景
        colorSuccess: 'rgba(34,197,94,0.15)',
        borderInfo: 'rgba(99,102,241,0.3)'
    },
    Tag: {
        colorInfo: 'rgba(99,102,241,0.15)',
        borderRadius: '6px',
        textColorInfo: ' #8183f4'        // 提亮紫文字
    },
    GradientText: {
        colors: [' #8183f4', ' #c084fc']  // 提亮渐变
    },

    Form: {
        labelTextColor: ' #cbd5e1',
        feedbackTextColor: ' #94a3b8',
        labelFontWeight: '600',
        labelMargin: '0 0 8px 4px',
        labelFontSize: '14px',
        feedbackPadding: '6px 0 0 4px',
        feedbackHeight: '22px',
        feedbackBorderRadius: '4px',
        feedbackColorHover: 'rgba(255,255,255,0.05)'
    },
    Input: {
        Input: {
            border: '1px solid rgba(129,131,244,0.3)',  // 使用主色透明度边框
            borderHover: '1px solid rgba(129,131,244,0.6)',
            borderFocus: '2px solid #8183f4',
            boxShadowFocus: '0 0 0 2px rgba(129,131,244,0.2)',
            color: ' #1b1a2c',          // 深紫背景与Layout主色同步
            colorFocus: ' #252342',     // 聚焦时加深背景
            placeholderColor: ' #64748b',
            // 新增图标适配
            iconColor: ' #94a3b8',       // slate-400
            iconColorFocus: ' #c084fc',  // 次紫色
            // 光标颜色强化
            caretColor: ' #8183f4',
            // 文字颜色分级
            textColor: ' #e2e8f0',       // 基础文字
            textColorDisabled: ' #64748b',
            // 悬停效果升级
            boxShadowHover: '0 2px 6px rgba(129,131,244,0.15)',
            // 错误状态同步
            borderError: '1px solid #f87171',
            borderErrorHover: '1px solid #fb7185',
            boxShadowErrorFocus: '0 0 0 2px rgba(248,113,113,0.2)'
        }
    },
    Select: {
        peers: {
            InternalSelection: {
                borderRadius: '8px',
                borderActive: '2px solid #6366f1',
                borderFocus: '2px solid #6366f1',
                boxShadowFocus: '0 0 0 2px rgba(99,102,241,0.1)',
                // 下拉箭头动画
                arrowColor: ' #64748b',
            },
            InternalSelectMenu: {
                optionColorActive: ' #e0e7ff',
                optionTextColorActive: ' #6366f1',
                // 下拉菜单样式
                borderRadius: '8px',
            }
        }
    },
    Menu: {
        itemColorActive: 'rgba(99,102,241,0.15)',
        itemColorActiveHover: 'rgba(99,102,241,0.2)',
        itemTextColorActive: ' #8183f4'
    },
    Table: {
        thColor: ' #1e293b',
        tdColorHover: 'rgba(255,255,255,0.03)',
        borderColor: 'rgba(255,255,255,0.1)'
    },
    Pagination: {
        itemColorActive: ' #8183f4',
        itemColorHover: 'rgba(99,102,241,0.15)'
    },
    Message: {
        colorInfo: 'rgba(99,102,241,0.15)',
        borderInfo: '1px solid rgba(99,102,241,0.3)'
    },
    Notification: {
        colorInfo: 'rgba(99,102,241,0.15)',
        borderInfo: '1px solid rgba(99,102,241,0.3)'
    },
    // 新增组件配置
    Checkbox: {

        border: '1px solid rgba(255,255,255,0.2)',
        borderChecked: '1px solid #8183f4',
        borderHover: '1px solid rgba(129,131,244,0.6)',
        color: 'transparent',
        colorChecked: 'transparent',
        checkMarkColor: ' #8183f4',
        checkMarkColorDisabled: 'rgba(255,255,255,0.3)',

        // 新增标签样式
        labelTextColor: ' #475569',
        labelTextColorChecked: ' #0f172a',
        // 勾选动画
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        // 3D按压效果
        boxShadowPressed: 'inset 0 2px 4px rgba(0,0,0,0.05)'
    },
    Radio: {
        // 波纹动画效果
        dotColorActive: ' #6366f1',
        buttonColorActive: ' #e0e7ff',
        // 按钮式单选
        buttonBorderRadius: '8px',
        buttonPadding: '8px 12px',
        // dotColorActive: ' #8183f4',
        boxShadowFocus: '0 0 0 2px rgba(129,131,244,0.3)'
    },
    Switch: {
        // 霓虹光效
        boxShadowActive: '0 0 6px rgba(99,102,241,0.4)',
        // 轨道渐变
        railColorActive: 'linear-gradient(145deg, #6366f1 0%, #a855f7 100%)',
        // railColorActive: ' #8183f4',
        boxShadowFocus: '0 0 0 2px rgba(129,131,244,0.3)'
    },
    Slider: {
        fillColor: ' #8183f4',
        handleColor: ' #ffffff',
        handleBoxShadow: '0 2px 6px rgba(0,0,0,0.3)'
    },
    Progress: {
        indicatorColor: ' #8183f4',
        railColor: 'rgba(255,255,255,0.1)'
    },
    Avatar: {
        color: 'rgba(99,102,241,0.15)', // 半透明紫
        textColor: ' #8183f4'
    },
    Badge: {
        color: ' #f87171',       // 柔化红
        textColor: ' #ffffff'
    },
    Tooltip: {
        color: ' #1e293b',       // 深蓝灰
        textColor: ' #f8fafc'
    },
    // ====== 新增配置 ======
    Empty: {
        iconColor: 'rgba(255,255,255,0.15)',
        textColor: ' #94a3b8'           // slate-400
    },
    Timeline: {
        itemColor: 'rgba(255,255,255,0.08)',
        titleTextColor: ' #f8fafc'      // slate-50
    },
    Log: {
        itemColor: ' #1e293b',          // 深蓝灰
        borderColor: 'rgba(255,255,255,0.1)'
    },
    Collapse: {
        titleTextColor: ' #f8fafc',
        arrowColor: ' #94a3b8'          // slate-400
    },
    // ====== 新增配置 ======
    Transfer: {
        borderColor: 'rgba(255,255,255,0.1)',
        headerColor: 'rgba(255,255,255,0.05)'
    },
    Cascader: {
        menuColor: ' #1e293b',           // 深蓝灰
        optionColorActive: 'rgba(99,102,241,0.15)'
    },
    ColorPicker: {
        panelColor: ' #1e293b',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
    },
    // ====== 新增配置 ======
    Drawer: {
        color: ' #1e293b',              // 深蓝灰
        headerBorderColor: 'rgba(255,255,255,0.1)'
    },
    Modal: {
        color: ' #1e293b',
        boxShadow: '0 12px 32px rgba(0,0,0,0.3)' // 加深投影
    },
    Tabs: {
        tabTextColorActive: ' #8183f4', // 亮化主色
        tabTextColorHover: ' #cbd5e1'   // slate-300
    },
    Tree: {
        nodeColorActive: 'rgba(99,102,241,0.15)',
        nodeTextColorActive: ' #8183f4'
    },
    // ====== 新增配置 ======
    DatePicker: {
        panelColor: ' #1e293b',
        itemColorActive: ' #8183f4',
        itemTextColorActive: ' #0f172a' // 深色文字增强对比
    },
    TimePicker: {
        panelColor: ' #1e293b',
        itemColorActiveHover: 'rgba(99,102,241,0.15)'
    },
    Upload: {
        draggerColor: 'rgba(255,255,255,0.03)',
        draggerBorder: '2px dashed rgba(255,255,255,0.1)'
    },
}
