module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      published: {
        type: DataTypes.DATE,
      },

      updated: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
      tableName: 'blog_posts',
      underscored: true
    }
  );

  BlogPost.associate = ({User}) => {
    BlogPost.belongsTo(User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };

  return BlogPost;
};
