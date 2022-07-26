// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: {
      desktop: string;
      mobile: string;
    };
  }
}