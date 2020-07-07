import PropTypes from 'prop-types';
import React from 'react';
declare class NumberSpinner extends React.Component {
    static defaultProps: {
        valueFormat: string | undefined;
    };
    static propTypes: {
        hitSlop?: PropTypes.Validator<import("react-native").Insets | undefined> | undefined;
        onLayout?: PropTypes.Validator<((event: import("react-native").LayoutChangeEvent) => void) | undefined> | undefined;
        pointerEvents?: PropTypes.Validator<"auto" | "none" | "box-none" | "box-only" | undefined> | undefined;
        removeClippedSubviews?: PropTypes.Validator<boolean | undefined> | undefined;
        style?: PropTypes.Validator<import("react-native").StyleProp<import("react-native").ViewStyle>> | undefined;
        testID?: PropTypes.Validator<string | undefined> | undefined;
        nativeID?: PropTypes.Validator<string | undefined> | undefined;
        collapsable?: PropTypes.Validator<boolean | undefined> | undefined;
        needsOffscreenAlphaCompositing?: PropTypes.Validator<boolean | undefined> | undefined;
        renderToHardwareTextureAndroid?: PropTypes.Validator<boolean | undefined> | undefined;
        shouldRasterizeIOS?: PropTypes.Validator<boolean | undefined> | undefined;
        isTVSelectable?: PropTypes.Validator<boolean | undefined> | undefined;
        hasTVPreferredFocus?: PropTypes.Validator<boolean | undefined> | undefined;
        tvParallaxProperties?: PropTypes.Validator<import("react-native").TVParallaxProperties | undefined> | undefined;
        tvParallaxShiftDistanceX?: PropTypes.Validator<number | undefined> | undefined;
        tvParallaxShiftDistanceY?: PropTypes.Validator<number | undefined> | undefined;
        tvParallaxTiltAngle?: PropTypes.Validator<number | undefined> | undefined;
        tvParallaxMagnification?: PropTypes.Validator<number | undefined> | undefined;
        onStartShouldSetResponder?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | undefined> | undefined;
        onMoveShouldSetResponder?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | undefined> | undefined;
        onResponderEnd?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onResponderGrant?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onResponderReject?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onResponderMove?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onResponderRelease?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onResponderStart?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onResponderTerminationRequest?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | undefined> | undefined;
        onResponderTerminate?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onStartShouldSetResponderCapture?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | undefined> | undefined;
        onMoveShouldSetResponderCapture?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | undefined> | undefined;
        onTouchStart?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onTouchMove?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onTouchEnd?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onTouchCancel?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onTouchEndCapture?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        accessible?: PropTypes.Validator<boolean | undefined> | undefined;
        accessibilityActions?: PropTypes.Validator<readonly Readonly<{
            name: import("react-native").AccessibilityActionName;
            label?: string | undefined;
        }>[] | undefined> | undefined;
        accessibilityLabel?: PropTypes.Validator<string | undefined> | undefined;
        accessibilityRole?: PropTypes.Validator<"search" | "link" | "none" | "checkbox" | "radio" | "button" | "text" | "menu" | "menubar" | "menuitem" | "progressbar" | "tab" | "toolbar" | "scrollbar" | "header" | "summary" | "image" | "switch" | "keyboardkey" | "adjustable" | "imagebutton" | "alert" | "combobox" | "radiogroup" | "spinbutton" | "tablist" | "timer" | undefined> | undefined;
        accessibilityStates?: PropTypes.Validator<import("react-native").AccessibilityStates[] | undefined> | undefined;
        accessibilityState?: PropTypes.Validator<import("react-native").AccessibilityState | undefined> | undefined;
        accessibilityHint?: PropTypes.Validator<string | undefined> | undefined;
        onAccessibilityAction?: PropTypes.Validator<((event: import("react-native").AccessibilityActionEvent) => void) | undefined> | undefined;
        accessibilityComponentType?: PropTypes.Validator<"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked" | undefined> | undefined;
        accessibilityLiveRegion?: PropTypes.Validator<"none" | "assertive" | "polite" | undefined> | undefined;
        importantForAccessibility?: PropTypes.Validator<"auto" | "yes" | "no" | "no-hide-descendants" | undefined> | undefined;
        accessibilityElementsHidden?: PropTypes.Validator<boolean | undefined> | undefined;
        accessibilityTraits?: PropTypes.Validator<"search" | "link" | "none" | "button" | "text" | "disabled" | "header" | "summary" | "image" | "key" | "adjustable" | "selected" | "plays" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | import("react-native").AccessibilityTrait[] | undefined> | undefined;
        accessibilityViewIsModal?: PropTypes.Validator<boolean | undefined> | undefined;
        onAccessibilityEscape?: PropTypes.Validator<(() => void) | undefined> | undefined;
        onAccessibilityTap?: PropTypes.Validator<(() => void) | undefined> | undefined;
        onMagicTap?: PropTypes.Validator<(() => void) | undefined> | undefined;
        accessibilityIgnoresInvertColors?: PropTypes.Validator<boolean | undefined> | undefined;
        visible: PropTypes.Requireable<boolean>;
        unit: PropTypes.Requireable<string>;
        maxValue: PropTypes.Requireable<number>;
        minValue: PropTypes.Requireable<number>;
        interval: PropTypes.Requireable<number>;
        defaultValue: PropTypes.Requireable<number>;
        valueFormat: PropTypes.Requireable<string>;
        onNumberChanged: PropTypes.Requireable<(...args: any[]) => any>;
    };
    constructor(props: any, context: any);
    render(): JSX.Element;
}
export default NumberSpinner;
