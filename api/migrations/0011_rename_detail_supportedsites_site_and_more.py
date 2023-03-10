# Generated by Django 4.1.3 on 2023-02-06 19:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0010_alter_pricingplan_supportedsites"),
    ]

    operations = [
        migrations.RenameField(
            model_name="supportedsites",
            old_name="detail",
            new_name="site",
        ),
        migrations.AlterField(
            model_name="pricingplan",
            name="supportedsites",
            field=models.ManyToManyField(
                default=1, related_name="supported_sites", to="api.supportedsites"
            ),
        ),
    ]
