import { Icon, IconElement, IconProps } from "@ui-kitten/components";

export const BackIcon = (props: IconProps) => (
    <Icon {...props} name='arrow-back' />
);

export const ProductsIcon = (props: IconProps): IconElement => (
    <Icon
        {...props}
        name='pricetags-outline'
    />
);

export const SettingsIcon = (props: IconProps): IconElement => (
    <Icon
        {...props}
        name='settings-2-outline'
    />
);