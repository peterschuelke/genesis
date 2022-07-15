import { html, TemplateResult } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import './outline-alert';

const configuration = {
  title: "Content/Outline Alert",
  component: 'outline-alert',
  argTypes: {
    statusType: {
      control: {
        type: 'select',
        options: ['info','warning','error','success']
      },
      name: 'status-type',
      description: 'undefined',
      table: { 
        category: 'Properties', 
        defaultValue: { 
          summary: "info"
        } 
      },
    },
      control: {
        type: 'select',
        options: ['small','large']
      },
      name: 'size',
      description: 'undefined',
      table: { 
        category: 'Properties', 
        defaultValue: { 
          summary: "large"
        } 
      },
    },
      control: {
        type: 'boolean'
      },
      name: 'is-interactive',
      description: 'This is important context for screen readers.',
      table: { 
        category: 'Properties', 
        defaultValue: { 
          summary: false
        } 
      },
    },
      control: {
        type: 'boolean'
      },
      name: 'should-show-icon',
      description: 'undefined',
      table: { 
        category: 'Properties', 
        defaultValue: { 
          summary: true
        } 
      },
    },
    
    defaultSlot: {
      control: 'text',
      description: 'The alert contents.',
      table: { category: 'Slots' },
    },
    headerSlot: {
      control: 'text',
      description: 'The header in the alert.',
      table: { category: 'Slots' },
    },
    
    outlineAlertInfoBackground: {
      name: '--outline-alert-info-background',
      description: 'The background color for the info alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertInfoText: {
      name: '--outline-alert-info-text',
      description: 'The text color for the info alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertInfoBorder: {
      name: '--outline-alert-info-border',
      description: 'The border color for the info alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertSuccessBackground: {
      name: '--outline-alert-success-background',
      description: 'The background color for the success alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertSuccessText: {
      name: '--outline-alert-success-text',
      description: 'The text color for the success alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertSuccessBorder: {
      name: '--outline-alert-success-border',
      description: 'The border color for the success alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertWarningBackground: {
      name: '--outline-alert-warning-background',
      description: 'The background color for the warning alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertWarningText: {
      name: '--outline-alert-warning-text',
      description: 'The text color for the warning alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertWarningBorder: {
      name: '--outline-alert-warning-border',
      description: 'The border color for the warning alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertErrorBackground: {
      name: '--outline-alert-error-background',
      description: 'The background color for the error alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertErrorText: {
      name: '--outline-alert-error-text',
      description: 'The text color for the error alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertErrorBorder: {
      name: '--outline-alert-error-border',
      description: 'The border color for the error alert.',
      table: { category: 'CSS Variables' }
    },
  
  },
  args: {
    
    statusType: "info",
    size: "large",
    isInteractive: false,
    shouldShowIcon: true, 
  defaultSlot: `Enter slot content here`,
  
  },
  parameters: {
    // PARAMETERS
    docs: {
      source: {
        code: `
<outline-alert
  
  status-type="info"
  size="large"
  is-interactive=false
  should-show-icon=true
>
</outline-alert>
        `,
      }
    },   
  },
};

export default configuration;

const Template = (args = configuration.args): TemplateResult => {
  args = {
    ...configuration.args,
    ...args,
  };
  
  return html`
      <outline-alert
      status-type=${args.statusType}
      >
      	${unsafeHTML(args.defaultSlot ?? '')}
      </outline-alert>
   `;
}

export const OutlineAlert = Template.bind({});

export const OutlineAlertVariant = Template.bind({});
OutlineAlertVariant.args = {
  // overwrite args here for variant
  // sampleArg: 'sample value',
}
OutlineAlertVariant.parameters = {
  docs: {
    source: {
      code: `
<outline-alert>
// the code in the main config is used for all stories unless overwritten here
</outline-alert>
      `,
    }
  },   
}