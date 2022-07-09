import {Command, Flags} from '@oclif/core'
import {createStory} from '../../helpers/generate/story/generate-story'

export default class GenerateStory extends Command {
  static description = 'Generates a Storybook story using the custom-elements.json file.'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static args = [{name: 'name', required: true, description: 'name of component'}]

  static flags = {
    fullBleed: Flags.boolean({char: 'f', description: 'allow the component to expand to the full width and height of the Storybook Canvas'}),
    output: Flags.string({char: 'o', description: 'category for the story, defaults to the same path as the component'}),
    customElementsPath: Flags.string({char: 'p', description: 'path to custom-elements.json. overrides config setting'}),
    category: Flags.string({char: 'c', description: 'category for the story', default: 'Content'},
    ),
    nameSpace: Flags.string({char: 'n', description: 'name space for the component. defaults to the base name used for the component'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(GenerateStory)
    createStory(
      args.name,
      flags.output,
      flags.nameSpace,
      flags.category,
      flags.customElementsPath,
      flags.fullBleed,
    )
    // if (args.name) {
    //   this.log(`name: ${args.name}`)
    // } else {
    //   this.error('Missing component name argument. try --help')
    // }
  }
}
