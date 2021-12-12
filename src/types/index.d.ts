import { StyleRules } from '@material-ui/core'

interface MuiDropzoneNameToClassKey {
  MuiDropzoneArea:
    | 'root'
    | 'text'
    | 'active'
    | 'invalid'
    | 'textContainer'
    | 'icon'
  MuiDropzonePreviewList: 'root' | 'imageContainer' | 'image' | 'removeButton'
  MuiDropzoneSnackbar:
    | 'infoAlert'
    | 'successAlert'
    | 'warningAlert'
    | 'errorAlert'
    | 'message'
    | 'icon'
    | 'closeButton'
}

type OverridesNameToClassKey = {
  [Name in keyof MuiDropzoneNameToClassKey]?: Partial<
    StyleRules<MuiDropzoneNameToClassKey[Name]>
  >
}

declare global {
  type Option = 'download' | 'upload' | null
}

declare module '@material-ui/core/styles/overrides' {
  export interface ComponentNameToClassKey extends OverridesNameToClassKey {}
}
