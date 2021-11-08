import { StyleRules } from '@material-ui/core'

// Interface would be maintained by the repository.
// Of course, this could be split into separate types.
interface MuiDropzoneNameToClassKey {
  MuiDropzoneArea: 'root' | 'text' | 'active' | 'invalid' | 'textContainer' | 'icon'
  MuiDropzonePreviewList: 'root' | 'imageContainer' | 'image' | 'removeButton'
  MuiDropzoneSnackbar: 'infoAlert' | 'successAlert' | 'warningAlert' | 'errorAlert' | 'message' | 'icon' | 'closeButton'
}

// Overrides would be maintained by the user.

/**
 * Type which accepts anything that's declared above. Can be exported if you wish to define a constant using the types.
 */
type OverridesNameToClassKey = {
  // MaterialUI internally uses the following definition, which also works in my project.
  [Name in keyof MuiDropzoneNameToClassKey]?: Partial<StyleRules<MuiDropzoneNameToClassKey[Name]>>
}

/**
 * Redeclare the MUI theme override type to allow anything we've defined here to be allowed into the overrides list.
 */
declare module '@material-ui/core/styles/overrides' {
  export interface ComponentNameToClassKey extends OverridesNameToClassKey {}
}
