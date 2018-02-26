const theme = {};

theme.palette = {
  primary: [
    '#1f83ff', // 0: Default
    '#137cff', // 1: Darken 4%
    '#107bff', // 2: Darken 5%
    'rgba(68, 130, 255, 0.2)', // 3: Fade 20%
    '#2586ff', // 4: Lighten 3%
    'rgba(68, 130, 255, 0.75)', // 5: Fade 75%
    '#4095ff', // 6: Lighten 15%
    '#3991ff', // 7: Lighten 12%
    '#197fff', // 8: Darken 2%
    '#3369e7', // 9: Algolia color
    '#308cff', // 10: Lighten 8%
    '#2b69e6', // 11:
    '#0273ff', // 12: darken 10%
    '#2a89ff', // 13: Lighten 5%
  ],
  secondary: [
    '#284052', // 0: DarkBlue
    '#f1f3f6', // 1: LightBluish
    '#788195', // 2: LightBlue
    '#E4E6E9', // 3: LightBluish Darken 5%
    '#364d79', // 4:
    '#09243a', // 5: DarkBlue Darken 5%
    '#f5f6f8', // 6: LighterBluish
    '#e9ebf1', // 7: DarkBluish
    '#F6F8FB', // 8: LighterBluish Lighten 2%
    '#E9EBEE', // 9: LighterBluish Darken 3%
    '#1a1a1a', // 10: Sidebar submenu select
    '#09243a', // 11: dark-indigo
  ],
  grays: [
    '#aeb5bb', // 0: cool-grey
    '#788195', // 1: $steel
    '#d1d1d1', // 2: pinkish-grays
    '#9b9b9b', // 3: warm-grays
    '#58595b', // 4 :slate-gray
    '#c2c9da', // 5 :cloudy-blue
    '#284052', // 6 :dark-grey-blue
    '#475969', // 7 :slate
    '#62717e', // 8 :battleship-grey
    '#7c8893', // 9 :steel-two
    '#aeb5bb', // 10 :cool-grey
    '#dcdfe2', // 11 :silver
    '#f2f3f5', // 12 :pale-grey
  ],
  color: [
    '#d96119', // 0: Orange
    '#42299a', // 1: Purple
    '#F75D81', // 2: Pink
    '#7ED321', // 3: LimeGreen
    '#39435f', // 4: BlueShade
    '#FFCA28', // 5: Yellow
    '#F2BD1B', // 6: Yellow Darken 5%
    '#3b5998', // 7: Facebook
    '#344e86', // 8: Facebook Darken 5%
    '#dd4b39', // 9: Google Plus
    '#d73925', // 10: Google Plus Darken 5%
    '#e14615', // 11: Auth0
    '#ca3f13', // 12: Auth0
    '#e0364c', // 13: themeColor--AlizarinCrimson
    '#3CD17C', // 14: ThemeGreen
    '#ffffff', // 15: White
  ],
  warning: [
    '#ffbf00', // 0: Warning
  ],
  success: [
    '#3dbd7d', // 0: Success
    '#00b16a', // 1: Success
    '#00db7e', // 2: turquoise-green
    '#41f2c8', // 3: aqua-marine
  ],
  error: [
    '#f64744', // 0: Error
    '#EC3D3A', // 1: Darken 4%
    '#FF5B58', // 2: Lighten 8%
  ],
  grayscale: [
    '#bababa', // 0: GreyShade
    '#c1c1c1', // 1: GreyDark
    '#D8D8D8', // 2: Grey
    '#f1f1f1', // 3: GreyAlt
    '#F3F3F3', // 4: GreyLight
    '#fafafa', // 5: DarkWhite
    '#F9F9F9', // 6: DarkerWhite
    '#fcfcfc', // 7: #fff Darken 1%
    '#eeeeee', // 8:
    '#fbfbfb', // 9:
    '#f5f5f5', // 10:
    '#f7f8f9', // 11: today-highlight-bg
  ],
  text: [
    '#323332', // 0: Heading
    '#595959', // 1: HeadingLight
    '#979797', // 2: Text
    '#797979', // 3: TextDark
    '#6a6c6a', // 4: Heading Lighten 22%
  ],
  border: [
    '#e9e9e9', // 0: Border
    '#d8d8d8', // 1: BorderDark
    '#ebebeb', // 2: BorderLight
    '#d3d3d3', // 3:
    'rgba(228, 228, 228, 0.65)', // 4:
  ],
  calendar: [
    '#905', // 0:
    '#690', // 1:
    '#a67f59', // 2:
    '#07a', // 3:
    '#dd4a68', // 4:
    '#e90', // 5:
  ],
};

theme.fonts = {
  primary: 'Roboto, sans-serif',
  secondary: 'Source Sans Pro, sans-serif',
  primaryheader: 'Montserrat, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
};

export default theme;
