import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAchievement extends Struct.ComponentSchema {
  collectionName: 'components_about_achievements';
  info: {
    displayName: 'achievement';
  };
  attributes: {
    description: Schema.Attribute.String;
    time: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutBanner extends Struct.ComponentSchema {
  collectionName: 'components_about_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface AboutFeature extends Struct.ComponentSchema {
  collectionName: 'components_about_features';
  info: {
    displayName: 'feature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutHistory extends Struct.ComponentSchema {
  collectionName: 'components_about_histories';
  info: {
    displayName: 'history';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutLeader extends Struct.ComponentSchema {
  collectionName: 'components_about_leaders';
  info: {
    description: '';
    displayName: 'leader';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutNameCard extends Struct.ComponentSchema {
  collectionName: 'components_about_name_cards';
  info: {
    displayName: 'Name card';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutPartner extends Struct.ComponentSchema {
  collectionName: 'components_about_partners';
  info: {
    displayName: 'partner';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface AboutValue extends Struct.ComponentSchema {
  collectionName: 'components_about_values';
  info: {
    displayName: 'value';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BusinessActivity extends Struct.ComponentSchema {
  collectionName: 'components_business_activities';
  info: {
    displayName: 'activity';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.achievement': AboutAchievement;
      'about.banner': AboutBanner;
      'about.feature': AboutFeature;
      'about.history': AboutHistory;
      'about.leader': AboutLeader;
      'about.name-card': AboutNameCard;
      'about.partner': AboutPartner;
      'about.value': AboutValue;
      'business.activity': BusinessActivity;
    }
  }
}
