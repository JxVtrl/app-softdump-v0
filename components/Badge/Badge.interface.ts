export interface BadgeProps {
    text?: string;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    size?: string;
    icon?: 'crown' | 'star' | 'heart' | 'circle' | 'square' | 'check' | 'bell' | 'exclamation' | 'info' | 'question' | 'user' | 'lock' | 'unlock' | 'calendar' | 'clock' | 'sun' | 'moon' | 'envelope' | 'comment' | 'comment-alt' | 'comment-dots' | 'comment-slash' | 'comment-medical' | 'comment-dollar' | 'comment-lines' | 'comment-alt-lines' | 'pencil' | 'pen' | 'pencil-alt' | 'pen-alt' | 'eraser' | 'pencil-ruler' | 'pencil-ruler-r' | 'pencil-ruler-y' | 'pencil-ruler-y' | 'brush' | 'brush-alt' | 'paint-brush' | 'paint-brush-alt' | 'fill' | 'fill-drip' | 'palette' | 'rainbow' | 'tint' | 'tint-slash' | 'paint-roller' | 'paint-roller' | 'stamp' | 'tape' | 'desktop' | 'laptop' | 'tablet' | 'mobile' | 'mobile-alt' | 'headphones' | 'headset' | 'microphone' | 'microphone-slash' | 'keyboard' | 'keypad' | 'laptop-code' | 'printer' | 'tv' | 'camera' | 'camera-alt' | 'video' | 'film' | 'camera-retro' | 'images' | 'photo-video' | 'portrait' | 'landscape' | 'heart' | 'heart-broken' | 'star' | 'star-half' | 'star-half-alt' | 'star-of-life' | 'snowflake' | 'snowflake' | 'sun' | 'moon' | 'cloud' | 'cloud-moon' | 'cloud-sun' | 'cloud-sun-rain' | 'cloud-rain' | 'cloud-showers-heavy' | 'cloud-snow' | 'cloud-sun' | 'cloud-moon' | 'cloud-moon-stars'
    iconColor?: string;
    iconSize?: number;
    onPress?: () => void;
}