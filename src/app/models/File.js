import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    // super para dar init da classe pai - Model
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3333/files/${this.path}`;
          },
        },
      },
      {
        sequelize, // segundo parametro para Model.init()
      }
    );

    return this;
  }
}

export default File;
